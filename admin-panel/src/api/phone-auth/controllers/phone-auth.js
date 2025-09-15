import crypto from "crypto";

export default {
  async sendOtp(ctx) {
    const { phone } = ctx.request.body;

    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      return ctx.badRequest("Invalid Indian mobile number");
    }

    const normalizedPhone = `+91${phone}`;
    const code = strapi.api["otp"].services.otp.generateCode();
    const code_hash = strapi.api["otp"].services.otp.hashCode(code);
    const expires_at = new Date(Date.now() + 5 * 60 * 1000);

    await strapi.entityService.create("api::otp.otp", {
      data: { phone: normalizedPhone, code_hash, expires_at }
    });

    await strapi.api["otp"].services.otp.sendSms(normalizedPhone, code);

    ctx.body = { ok: true, message: "OTP sent if phone is valid." };
  },

  async verifyOtp(ctx) {
    const { phone, code, password } = ctx.request.body;
    if (!phone || !code) return ctx.badRequest("Phone and code required");

    const normalizedPhone = `+91${phone}`;
    const code_hash = strapi.api["otp"].services.otp.hashCode(code);

    const [otp] = await strapi.entityService.findMany("api::otp.otp", {
      filters: { phone: normalizedPhone, code_hash, used: false, expires_at: { $gt: new Date() } },
      sort: { createdAt: "desc" },
      limit: 1
    });

    if (!otp) return ctx.unauthorized("Invalid or expired code");

    await strapi.entityService.update("api::otp.otp", otp.id, { data: { used: true } });

    let user = await strapi.db.query("plugin::users-permissions.user").findOne({ where: { phone: normalizedPhone } });

    if (!user) {
      if (!password) return ctx.badRequest("Password required for new users");

      const defaultRole = await strapi.db.query("plugin::users-permissions.role").findOne({ where: { type: "authenticated" } });

      user = await strapi.entityService.create("plugin::users-permissions.user", {
        data: {
          username: normalizedPhone,
          email: `${normalizedPhone}@phone.local`,
          phone: normalizedPhone,
          phone_verified: true,
          confirmed: true,
          password,
          role: defaultRole.id
        }
      });
    } else if (!user.phone_verified) {
      await strapi.entityService.update("plugin::users-permissions.user", user.id, { data: { phone_verified: true, confirmed: true } });
    }

    const jwt = await strapi.service("plugin::users-permissions.jwt").issue({ id: user.id });

    ctx.body = { jwt, user };
  }
};
