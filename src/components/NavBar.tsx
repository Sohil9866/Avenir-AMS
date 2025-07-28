// components/NavBar.tsx
import React from "react";
import Logo from "../assets/Logo.svg"; // Make sure this path is correct

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-white bg-opacity-100 shadow-sm px-6 py-4 z-10">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Avenir AMS Logo" className="h-15 w-20" />
        <div className="text-sm text-gray-700">Profiles</div>
      </div>
    </nav>
  );
};

export default NavBar;
