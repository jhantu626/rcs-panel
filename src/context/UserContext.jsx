import { createContext, useContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUsers = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const check = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };

  useEffect(() => {
    check();
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
