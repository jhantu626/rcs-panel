const { createContext } = require("react");

const AuthContext=createContext();

const AuthProvider=({children})=>{

    const [user,setUser]=useState(null);
    const [role,setRole]=useState(null);
    const [loading,setLoading]=useState(true);

    

    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}