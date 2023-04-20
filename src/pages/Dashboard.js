import Header from '../components/Header'
import useAuth from '../context/authContext'


const Dashboard = () => {
  const {auth} = useAuth()

  return (
    <>
      <Header/>
      <div className='text-center mt-5'>        
        <h2>Welcome {auth.firstName + " " + auth.lastName}</h2>
      </div>
    </>
  )
}

export default Dashboard