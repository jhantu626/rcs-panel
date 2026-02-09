import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const authToken = useAuth("authToken");
  const isLoading = useAuth("loading");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!authToken) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
