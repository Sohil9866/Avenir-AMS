import React from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-transparent px-6 py-4 z-10">
      <div className="flex w-full justify-end items-center space-x-6 text-gray-700">
        {/* Notification Icon */}
        <button
          aria-label="Notifications"
          className="relative hover:text-gray-900 focus:outline-none"
        >
          <FaBell size={20} />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        {/* Profile Icon */}
        <button
          aria-label="Profile"
          className="hover:text-gray-900 focus:outline-none"
        >
          <FaUserCircle size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
