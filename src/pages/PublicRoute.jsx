import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { MainLoaders } from "./../components";

const PublicRoute = () => {
  const authToken = useAuth("authToken");
  const isLoading = useAuth("loading");

  if (isLoading) {
    return <MainLoaders />;
  }

  if (authToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
