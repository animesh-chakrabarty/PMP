module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/local/register',
      handler: 'email-auth.register',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/verify-email',
      handler: 'email-auth.verifyEmail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/resend-otp',
      handler: 'email-auth.resendOTP',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};