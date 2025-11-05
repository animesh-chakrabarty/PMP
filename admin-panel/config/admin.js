module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    logo: env('ADMIN_LOGO', '/logo.png'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: false,
    promoteEE: false,
  },
  head: {
    favicon: env('ADMIN_FAVICON', '/favicon.ico'),
  },
  menu: {
    logo: env('ADMIN_LOGO', '/logo.png'),
  },
  theme: {
    colors: {
      primary100: '#f6ecfc',
      primary200: '#e0c1f4',
      primary500: '#ac73e6',
      primary600: '#9736e8',
      primary700: '#8312d1',
      danger700: '#b72b1a'
    },
  },
  tutorials: false,
  notifications: {
    releases: false,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Inventory Management",
      "app.components.LeftMenu.navbrand.workplace": "Admin Panel",
      "Auth.form.welcome.title": "Welcome to Inventory Management",
      "Auth.form.welcome.subtitle": "Log in to your admin account",
      "app.components.HomePage.welcome": "Welcome to your Inventory Management System",
      "app.components.HomePage.welcome.again": "Welcome back 👋",
    },
  },
});
