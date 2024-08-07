import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/auth/useAuth";
import { Loading } from "../../../components/Utils/Loading";
/**
 * AuthorizationLayout This component is responsible for user who is logged in
 * @returns AuthorizationLayout component with the routes for the user who is logged in
 */
export const AuthorizationLayout = () => {
  const {data, error, isLoading} = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!isLogged) {
    return (
      // If the user is not logged in, we redirect to the login page
      <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
    );
  }
  // If the user is logged in, we show the private routes
  return <Outlet />;
};
