import LoginForm from "../components/LoginForm"
import Header from "../components/Header"
import useAuth from "../context/authContext"
import { Navigate } from "react-router-dom"

const Login = () => {
  const {auth} = useAuth()
  if (auth) {
    return <Navigate to={`/${auth.role}`}/>
  }

  
  return (
    <div className="bg-blue home d-flex flex-column">
    <Header type="home"/>


    <main className=' d-flex align-items-center justify-content-center flex-grow-1 '>
      <div className="">
        <h3 className='mb-4 text-white fw-bold'>Login</h3>
        <LoginForm/>
      </div>
    </main>
    </div>
  )
}

export default Login