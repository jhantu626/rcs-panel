import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const authToken = useAuth("authToken");
  const isLoading = useAuth("loading");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!authToken) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
