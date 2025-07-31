// components/Sidebar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AppRoutes } from "../shared/@constants/routes";

import Logo from "../assets/Logo.svg?url";
import DashboardIcon from "../assets/Dashboard.svg?url";
import AttendanceIcon from "../assets/Attendance.svg?url";
import EmployeesIcon from "../assets/Employees.svg?url";
import LeaverequestIcon from "../assets/LeaveRequest.svg?url";
import SettingsIcon from "../assets/Settings.svg?url";

const Sidebar = () => {
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col justify-between bg-white text-black p-4 shadow-lg
      ${
        collapsed ? "w-15" : "w-44"
      } transition-all duration-300 ease-in-out overflow-hidden`}
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          {/* Logo (hidden when collapsed) */}
          {!collapsed && (
            <img
              src={Logo}
              alt="Logo"
              className="w-20 transition-all duration-300"
            />
          )}

          {/* Toggle Button to right of logo */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            {collapsed ? (
              <FaChevronRight size={20} />
            ) : (
              <FaChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 text-gray-800">
          <Link
            to={AppRoutes.DASHBOARD}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <img src={DashboardIcon} alt="Dashboard" className="w-5 h-5" />
            {!collapsed && <span>Dashboard</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/employee-data`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <img src={EmployeesIcon} alt="Employees" className="w-5 h-5" />
            {!collapsed && <span>Employees</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/attendance`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <img src={AttendanceIcon} alt="Attendance" className="w-5 h-5" />
            {!collapsed && <span>Attendance</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/leave-request`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <img
              src={LeaverequestIcon}
              alt="Leave Request"
              className="w-5 h-5"
            />
            {!collapsed && <span>Leave Request</span>}
          </Link>

          <Link
            to={`${AppRoutes.DASHBOARD}/settings`}
            className="flex items-center gap-3 hover:text-blue-600 whitespace-nowrap"
          >
            <img src={SettingsIcon} alt="Settings" className="w-5 h-5" />
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
