// routes/Layout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Navbar />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
