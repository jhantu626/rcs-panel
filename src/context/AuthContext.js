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

  const login=({username,password})=>{
    try {
        
    } catch (error) {
        
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  const values = useMemo(() => {
    return {
      authToken,
      role,
      loading,
    };
  }, [authToken, role, loading]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
