import { Outlet } from "react-router-dom";

/**
 * MainLayout This component is responsible for handling the main layout of the application
 * It is used to wrap the private routes
 * And give them the same style
 * @returns MainLayout component with the private routes
 */
export const MainLayout = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <Outlet />
    </div>
  );
};
