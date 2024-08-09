import { Outlet } from "react-router-dom";
import {Navbar} from "../../components/Navbars/Navbar";

export const LandingPageLayout = () => {
  return (
    <div className="absolute min-h-screen min-w-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
