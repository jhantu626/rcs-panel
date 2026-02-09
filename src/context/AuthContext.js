import { authService } from "../services/AuthService";

const { createContext, useState, useMemo, useEffect } = require("react");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (!token) {
        setAuthToken(null);
        setRole(role);
        return;
      }
      setAuthToken(token);
      setRole(role);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ username, password }) => {
    try {
      const data = await authService.login(username, password);
      if (data.status) {
        setAuthToken(data.token);
        localStorage.setItem("token", data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const logout = async () => {
    try {
      setAuthToken(null);
      await localStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    checkUser();
  }, [authToken]);

  const values = useMemo(() => {
    return {
      authToken,
      role,
      loading,
      login,
      logout,
    };
  }, [authToken, role, loading, login, logout]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
