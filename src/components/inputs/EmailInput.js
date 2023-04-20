

const EmailInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className="mb-2">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name="email" className={`form-control ${touched && errors && "is-invalid"}`} id="email" aria-describedby="emailHelp"
        value={value} onChange={onChange} onBlur={onBlur}/>
        {touched && errors && 
        <small className='text-danger'>{errors}</small>}
    </div>
  )
}

export default EmailInput