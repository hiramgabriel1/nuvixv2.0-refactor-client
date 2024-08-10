import { Outlet } from "react-router-dom";
import {Navbar} from "../../components/Navbars/Navbar";

export const LandingPageLayout = () => {
  return (
    <main className="h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};
