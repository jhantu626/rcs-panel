import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(JSON.parse(localStorage.getItem("user"))) || null,
  );

  const setUsers = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const checkUser = () => {
    if(!user){
        console.log("User Not Found")
    }
  };

  const getUser=async()=>{
  }

  useEffect(() => {
    checkUser();
  }, []);

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
