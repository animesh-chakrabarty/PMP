import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-400 text-white shadow-lg py-6 px-12 flex items-center justify-between sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="text-3xl font-extrabold tracking-wider drop-shadow-md">
        🛍️ PriyaMobilePark
      </div>

      {/* Center - Links */}
      <div className="space-x-10 text-xl font-semibold">
        <a href="#" className="hover:text-yellow-200 transition">
          Visit Our Store
        </a>
        <a href="#" className="hover:text-yellow-200 transition">
          Offers
        </a>
        <a href="#" className="hover:text-yellow-200 transition">
          Contact
        </a>
      </div>

      {/* Right - Button */}
      <div>
        <button className="bg-yellow-400 text-black text-lg font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
