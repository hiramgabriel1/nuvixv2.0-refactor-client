
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "../../../stores/useToken";
/**
 * AuthenticationLayout This component is responsible for handling the authentication layout
 * @returns AuthenticationLayout component with the routes for the authentication
 */
export const AuthenticationLayout = () => {
  // We use the useLocation hook to get the current location
  const location = useLocation();
  const { token } = useToken();
  console.log("token", token);
  // If the user is logged in, we redirect to the home page
  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return (
    <div className="h-screen w-screen">
      <Outlet />
    </div>
  );
};
