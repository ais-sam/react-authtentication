

const SubmitButton = ({type,disabled}) => {
  return (
    <div className='d-flex justify-content-end mt-4'>
        {type === "login" ?
            <button type="submit" disabled={disabled} className="btn btn-primary w-100 ">Login</button>
        :
            <button disabled={disabled} type="submit" className="btn btn-primary">Register</button>
        }
    </div>
  )
}

export default SubmitButton