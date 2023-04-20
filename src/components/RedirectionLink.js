import { Link } from 'react-router-dom';



const RedirectionLink = ({type}) => {

    return (
        <div className="mb-2 text-center mt-4">
                { type === "register" ?
                    <small>Have already an account ? <Link to="/login" className='fw-bold'>Login here</Link></small>
                :
                    <small className='text-center'>Don't have an account ? <Link to="/register" className='fw-bold'>Register here</Link></small>
                }
        </div>
    )
}

export default RedirectionLink