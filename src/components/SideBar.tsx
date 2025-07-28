// components/Sidebar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { AppRoutes } from "../shared/@constants/routes";

const Sidebar = () => {
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col justify-between bg-white text-black p-4 shadow-lg
      ${collapsed ? "w-20" : "w-56"} transition-all duration-300`}
    >
      {/* Top Section */}
      <div>
        {/* Title + Collapse Button */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <h1 className="text-2xl font-bold text-blue-800 whitespace-nowrap">
              DASHBOARD
            </h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 text-gray-800">
          <Link
            to={AppRoutes.DASHBOARD}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <FaHome size={20} />
            {!collapsed && <span>Home</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/employee-data`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <FaUsers size={20} />
            {!collapsed && <span>Employee Data</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/attendance`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <FaCalendarCheck size={20} />
            {!collapsed && <span>Attendance</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/leave-request`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <FaClipboardList size={20} />
            {!collapsed && <span>Leave Request</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/settings`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <FaCog size={20} />
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </div>

      {/* Logout Button */}
      <div>
        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-600 hover:text-red-800 whitespace-nowrap"
        >
          <FaSignOutAlt size={20} />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
