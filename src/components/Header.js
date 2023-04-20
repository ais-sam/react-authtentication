
import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"
import useAuth from '../context/authContext';


const Header = ({type}) => {
  const {auth,setAuth} = useAuth()

  const handleLogout = ()=>{
    setAuth(null)
    localStorage.removeItem('auth')
    localStorage.removeItem('_token')
  }

  return (
    <div className="header">
      {type === "home"?
        <nav className="navbar py-3">
        <div className="container flex justify-content-between ">
            <NavLink to="/" className="text-decoration-none">
                <img src={logo} alt="" className="logo"/>
            </NavLink>
            <div className="d-flex gap-4">
                <NavLink to="/register" className="text-decoration-none text-white">Register</NavLink>
                <NavLink to="/login" className="text-decoration-none text-white">Login</NavLink>
            </div>
            
        </div>
    </nav>
      :
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
          <NavLink to={`/${auth.role}`}><img src={logo} className="navbar-brand logo" alt="sales pro"/></NavLink>
          <div className='d-flex gap-3 align-items-center'>
            {auth.role === "client" && <NavLink to="/client/profile" className='text-decoration-none  text-white'>Profile</NavLink>}
            {auth.role === "admin" && <NavLink to="/admin/list" className='text-decoration-none text-white'>Clients</NavLink>}
            <button  className='text-decoration-none text-white btn border' onClick={handleLogout}>Logout</button>
            <NavLink to={`/${auth.role}`} className="text-decoration-none"><span className='letter'>{auth.firstName[0]}</span></NavLink>
          </div>
        </div>
      </nav>

      }
    </div>
  );
}

export default Header