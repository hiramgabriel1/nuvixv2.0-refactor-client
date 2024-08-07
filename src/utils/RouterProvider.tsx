import { Route, Routes } from "react-router-dom";
import { AuthenticationLayout } from "../layouts/private/auth/AuthenticationLayout";
import { AuthorizationLayout } from "../layouts/private/auth/AuthorizationLayout";

/**
 * RouterProvider This component is responsible for handling the application routes
 * @returns RouterProvider component with the routes
 */
export const RouterProvider = () => {
  return (
    <Routes>
      {/* Here we define the public routes, that can be accessed without being logged in
        {/* We use the layout AuthenticationLayout to show the public routes, 
            since AuthenticationLayout has the logic to verify if the user is logged in or not. Using the useAuth hook
        */}
      <Route element={<AuthenticationLayout />}>
        <Route
          path="/auth/login"
          index
          element={<h1>Aqui va la pagina Login</h1>}
        />
      </Route>
      {/* Here we define the private routes, that can only be accessed if the user is logged in
        {/* We use the layout AuthorizationLayout to show the private routes,
            since AuthorizationLayout has the logic to verify if the user is logged in or not. Using the useAuth hook
        */}
      <Route element={<AuthorizationLayout />}>
        {/* Usamos el layout MainLayout para que las rutas privadas tengan el mismo estilo*/}
        <Route element={<MainLayout />}>
          {/* Aqui van las rutas privadas */}
          <Route path="/" element={<h1>Aqui la pagina principal</h1>} />
        </Route>
      </Route>
      <Route path="*" element={<div className="text-black">404</div>} />
    </Routes>
  );
};
