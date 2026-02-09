import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
  const authToken = useAuth("authToken");
  const isLoading = useAuth("loading");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (authToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
