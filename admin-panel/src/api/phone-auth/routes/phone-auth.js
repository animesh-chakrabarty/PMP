export default {
  routes: [
    { method: 'POST', path: '/auth/phone/send-otp', handler: 'phone-auth.sendOtp', config: { auth: false } },
    { method: 'POST', path: '/auth/phone/verify-otp', handler: 'phone-auth.verifyOtp', config: { auth: false } }
  ]
};
