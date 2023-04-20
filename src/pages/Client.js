
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import useAuth from '../context/authContext'

const Client = () => {
  const {auth} = useAuth()

  return (
    <>
      <Header/>
      <div className='container'>
        <h2 className='text-start mt-5'>My information</h2>
        <InfoCard user={auth}/>
      </div>
    </>
  )
}

export default Client