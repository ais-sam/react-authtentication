import useAuth from "../context/authContext"
import { Navigate, useLocation } from "react-router-dom"


const RequireAuth = ({children,role}) => {
    const {auth} = useAuth()
    const location = useLocation()
    if (auth?.role === role) {
      return children
    } else if (auth) {
      return <Navigate to="/unauthorized" state={{from: location}} replace />
    }else {
      return <Navigate to="/login"/>
    }

}

export default RequireAuth