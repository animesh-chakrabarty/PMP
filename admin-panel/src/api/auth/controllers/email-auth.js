'use strict';

module.exports = {
  async register(ctx) {
    const { email, password, username } = ctx.request.body;

    if (!email || !password || !username) {
      return ctx.badRequest('Please provide all required fields');
    }

    try {
      // Check if user already exists
      const existingUser = await strapi.db.query('plugin::users-permissions.user').findOne({
        where: { email },
      });

      if (existingUser) {
        return ctx.badRequest('Email already exists');
      }

      // Create unverified user
      const user = await strapi.plugins['users-permissions'].services.user.add({
        email,
        username,
        password,
        provider: 'local',
        confirmed: false,
        blocked: false,
        role: await strapi.query('plugin::users-permissions.role').findOne({ where: { type: 'authenticated' } }),
      });

      // Generate and send OTP
      const otp = strapi.service('api::auth.email-auth').generateOTP();
      await strapi.service('api::auth.email-auth').storeOTP(email, otp);
      await strapi.service('api::auth.email-auth').sendVerificationEmail(email, otp);

      return ctx.send({
        message: 'Registration successful. Please verify your email with the OTP sent.',
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
      });
    } catch (error) {
      console.error('Registration error:', error);
      return ctx.badRequest('Registration failed', { error: error.message });
    }
  },

  async verifyEmail(ctx) {
    const { email, otp } = ctx.request.body;

    if (!email || !otp) {
      return ctx.badRequest('Please provide email and OTP');
    }

    try {
      const isValid = await strapi.service('api::auth.email-auth').verifyOTP(email, otp);

      if (!isValid) {
        return ctx.badRequest('Invalid or expired OTP');
      }

      // Update user status to verified
      await strapi.db.query('plugin::users-permissions.user').update({
        where: { email },
        data: { confirmed: true },
      });

      return ctx.send({
        message: 'Email verified successfully. You can now login.',
      });
    } catch (error) {
      console.error(error);
      return ctx.badRequest('Verification failed');
    }
  },

  async resendOTP(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest('Please provide email');
    }

    try {
      const user = await strapi.db.query('plugin::users-permissions.user').findOne({
        where: { email },
      });

      if (!user) {
        return ctx.badRequest('User not found');
      }

      if (user.confirmed) {
        return ctx.badRequest('Email already verified');
      }

      const otp = strapi.service('api::auth.email-auth').generateOTP();
      await strapi.service('api::auth.email-auth').storeOTP(email, otp);
      await strapi.service('api::auth.email-auth').sendVerificationEmail(email, otp);

      return ctx.send({
        message: 'OTP resent successfully',
      });
    } catch (error) {
      console.error(error);
      return ctx.badRequest('Failed to resend OTP');
    }
  },
};