import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { MainLoaders } from "../components";

const ProtectedRoute = () => {
  const authToken = useAuth("authToken");
  // const isLoading = useAuth("loading");
  const isLoading = true;

  if (isLoading) {
    return <MainLoaders />;
  }

  if (!authToken) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
