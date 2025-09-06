import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">🛍️ PriyaMobilePark</span>
      </div>
      <div className="nav-center">
        <a href="#">Visit Our Store</a>
      </div>
      <div className="nav-right">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
