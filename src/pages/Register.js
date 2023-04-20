
import RegistrationFrom from '../components/RegistrationFrom'
import logo from "../assets/images/logo.png"
import Header from '../components/Header'
import { Navigate } from "react-router-dom"
import useAuth from '../context/authContext'


const Register = () => {
  const {auth} = useAuth()
  if (auth) {
    return <Navigate to={`/${auth.role}`}/>
  }

  
  return (
    <div className='bg-blue d-flex flex-column'>
      <Header type="home"/>
    <main className=' d-flex align-items-center justify-content-center flex-grow-1 pb-4'>
      <div className=''>
        <h3 className='d-lg-none mt-3 text-white'>Register</h3>
        <div className='mt-4 d-flex align-items-center shadow rounded-2 overflow-hidden'>
          <div className='d-none d-lg-flex flex-column align-items-center justify-content-center'>
            <img src={logo} className='w-25' alt=""/>
            <h3 className='text-white fw-blod mt-2'>Register</h3>
          </div>
          <RegistrationFrom/>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Register