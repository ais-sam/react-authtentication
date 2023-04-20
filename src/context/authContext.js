import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{

    let authToken = null
    if (localStorage.getItem('_token')) {
        authToken = localStorage.getItem("_token")
    }
    
    let loggedUser = null
    if (localStorage.getItem('auth')) {
        loggedUser = JSON.parse(localStorage.getItem("auth"))
    }

    const [token, setToken] = useState(authToken)
    const [auth, setAuth] = useState(loggedUser)
  
    const value = { auth, setAuth,token, setToken}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = ()=>{
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error("useAuth must be used whitin AuthContext")
    }
    return context
}

export default useAuth