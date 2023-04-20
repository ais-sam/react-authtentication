
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100 vw-100 bg-light flex-column gap-3'>
        <h2>404 page not found</h2>
        <button className="btn mt-3 bg-dark text-white" onClick={goBack}>Go back</button>
      </div>
    </>
  )
}

export default NotFound