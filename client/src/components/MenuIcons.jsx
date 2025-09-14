import React from "react";

const letters = ["M", "E", "N", "U"];
const links = ["/menu/m", "/menu/e", "/menu/n", "/menu/u"];

const MenuIcons = () => {
  return (
    <div className="menu-icon-row">
      {letters.map((letter, index) => (
        <a key={index} href={links[index]} className="icon-circle">
          {letter}
        </a>
      ))}
    </div>
  );
};

export default MenuIcons;
