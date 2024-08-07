import { Route, Routes } from "react-router-dom";
import { AuthenticationLayout } from "../layouts/private/auth/AuthenticationLayout";
import { AuthorizationLayout } from "../layouts/private/auth/AuthorizationLayout";
import { MainLayout } from "../layouts/public/MainLayout";
import IndexPage from "../pages/IndexPage";
import PageNotFound from "../components/Utils/Errors/PageNotFound";
import App from "../App";
import ExplorerPage from "../pages/app/ExplorerPage";

/**
 * RouterProvider This component is responsible for handling the application routes
 * @returns RouterProvider component with the routes
 */
export const RouterProvider = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<AuthenticationLayout />}>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/auth/login" element={<h1 className="text-black">Aquí va la página de Login</h1>} />
        <Route path="/auth/register" element={<h1>Aquí va la página de Register</h1>} />
      </Route>
      
      {/* Private routes */}
      <Route element={<AuthorizationLayout />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<h1>Aquí va la página principal</h1>} />
          <Route path="/app" element={<App />} />
          <Route path="/app/explorer" element={<ExplorerPage />} />
        </Route>
      </Route>
      
      {/* Catch-all route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
