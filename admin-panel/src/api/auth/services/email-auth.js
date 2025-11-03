'use strict';

module.exports = {
  async sendVerificationEmail(email, otp) {
    try {
      await strapi.plugins['email'].services.email.send({
        to: email,
        subject: 'Email Verification OTP',
        html: `
          <h1>Email Verification</h1>
          <p>Your OTP for email verification is: <strong>${otp}</strong></p>
          <p>This OTP will expire in 10 minutes.</p>
        `,
      });
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error(`Failed to send verification email: ${error.message}`);
    }
  },

  generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  async storeOTP(email, otp) {
    try {
      // Hash the OTP
      const hashedOTP = strapi.service('api::otp.otp').hashCode(otp);
      
      // Find existing OTP
      const existingOTP = await strapi.db.query('api::otp.otp').findOne({
        where: { email },
      });

      const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      if (existingOTP) {
        // Update existing OTP
        await strapi.db.query('api::otp.otp').update({
          where: { id: existingOTP.id },
          data: {
            code: hashedOTP,
            expiresAt: expirationTime,
            used: false
          },
        });
      } else {
        // Create new OTP
        await strapi.db.query('api::otp.otp').create({
          data: {
            email,
            code: hashedOTP,
            expiresAt: expirationTime,
            used: false
          },
        });
      }
      return true;
    } catch (error) {
      console.error('Error storing OTP:', error);
      throw new Error(`Failed to store OTP: ${error.message}`);
    }
  },

  async verifyOTP(email, otp) {
    try {
      const hashedOTP = strapi.service('api::otp.otp').hashCode(otp);
      const storedOTP = await strapi.db.query('api::otp.otp').findOne({
        where: { email, used: false },
      });

      if (!storedOTP) {
        return false;
      }

      if (new Date() > new Date(storedOTP.expiresAt)) {
        return false;
      }

      if (storedOTP.code !== hashedOTP) {
        return false;
      }

      // Mark OTP as used
      await strapi.db.query('api::otp.otp').update({
        where: { id: storedOTP.id },
        data: { used: true },
      });

      return true;
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return false;
    }
  },
};