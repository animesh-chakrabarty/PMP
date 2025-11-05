import Logo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace Strapi's logo in admin
    auth: {
      logo: Logo,
    },
    // Replace favicon
    head: {
      favicon: favicon,
    },
    // Replace logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Extend the translations
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Inventory Management',
        'app.components.LeftMenu.navbrand.workplace': 'Admin Panel',
        'Auth.form.welcome.title': 'Welcome to Priya Mobile Park Inventory Management',
        'Auth.form.welcome.subtitle': 'Log in to your admin account',
        'app.components.HomePage.welcome': 'Welcome to your Inventory Management System',
        'app.components.HomePage.welcome.again': 'Welcome back 👋',
      },
    },
    // Disable tutorials
    tutorials: false,
    // Disable notifications about Strapi updates
    notifications: {
      releases: false,
    },
  },
  bootstrap() {},
};