// AppRouter.tsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AppRoutes } from "../shared/@constants/routes";
import PrivateRoute from "../app/PrivateRoute";
import Layout from "../app/Layout";
import LoginForm from "../components/form/LoginForm";
import Dashboard from "../pages/Dashboard";
import EmployeeData from "../pages/EmployeeData";
import Attendance from "../pages/Attendance";
import LeaveRequest from "../pages/LeaveRequest";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to={AppRoutes.LOGIN} replace /> },
  { path: AppRoutes.LOGIN, element: <LoginForm /> },
  {
    path: AppRoutes.DASHBOARD, // "/dashboard"
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> }, // /dashboard
      { path: "employee-data", element: <EmployeeData /> }, // /dashboard/employee-data
      { path: "attendance", element: <Attendance /> }, // /dashboard/attendance
      { path: "leave-request", element: <LeaveRequest /> }, // /dashboard/leave-request
      { path: "settings", element: <Settings /> }, // /dashboard/settings
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
