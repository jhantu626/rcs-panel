import { createContext, useContext, useEffect, useState } from "react";
import { userService } from "./../services/UserService";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const token = useAuth("authToken");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || null),
  );

  const setUsers = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUser = async () => {
    if (!user) {
      console.log("token", token);
      try {
        const dbUser = await userService.profile(token);
        setUsers(dbUser);
        localStorage.setItem("user", JSON.stringify(dbUser));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (attribute) => {
  const { user } = useContext(UserContext);
  if (!attribute) {
    return user;
  }
  return user[attribute];
};

export { useUser, UserProvider };
