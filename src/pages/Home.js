import hero from "../assets/images/hero4.png"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import { Navigate } from "react-router-dom"
import useAuth from '../context/authContext'


const Home = () => {
    const {auth} = useAuth()
    if (auth) {
      return <Navigate to={`/${auth.role}`}/>
    }

  return (
    <div className='home d-flex flex-column '>
        <Header type="home"/>
        <main className="d-flex justify-content-center align-items-center flex-grow-1">
            <div className='container d-flex flex-column flex-lg-row justify-content-between align-items-center text-start gap-3'>
                <div className='text-white hero-text'>
                    <h2 className='fs-1'>We offer modern solution for growing your business</h2>
                    <p className='mt-3 w-75'>An awesome and powerful tool for your business, increase business revenue with SalesPro CRM.</p>
                    <Link to="/login"><button className='btn hero-btn bg-white text-primary fw-bold p-2 px-3 rounded-none mt-4'>Get started</button></Link>
                </div>
                <div className="hero-img d-none d-lg-block">
                    <img src={hero} alt=""/>
                </div>
                
            </div>
        </main>
    </div>
  )
}

export default Home