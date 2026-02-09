import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const authToken = useAuth("authToken");
  const isLoading = useAuth("loading");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If user is already authenticated, redirect to dashboard
  if (authToken) {
    return <Navigate to="/" replace />;
  }

  // If not authenticated, show the public page (login)
  return children;
};

export default PublicRoute;
