'use strict';
const crypto = require('crypto');
const axios = require('axios');

module.exports = {
  generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  hashCode(code) {
    return crypto.createHmac('sha256', process.env.OTP_SECRET).update(code).digest('hex');
  },

  async sendSms(phone, code) {
    // Example: MSG91 or Textlocal (India DLT compliant)
    if (process.env.SMS_PROVIDER === 'MSG91') {
      await axios.post('https://control.msg91.com/api/v5/otp', {
        template_id: process.env.MSG91_TEMPLATE_ID,
        mobile: phone,
        otp: code
      }, {
        headers: { authkey: process.env.MSG91_API_KEY }
      });
    } else {
      strapi.log.warn(`SMS not configured. OTP: ${code}`);
    }
  }
};
