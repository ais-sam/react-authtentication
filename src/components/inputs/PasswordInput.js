

const PasswordInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className="mb-2">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name="password" className={`form-control ${touched && errors && "is-invalid"}`} id="password"
        value={value} onChange={onChange} onBlur={onBlur}/>
        {touched && errors && <>
          <small className='text-danger'>{errors}</small>
          <small className='d-block bg-light p-2 rounded'>the password must be at least 8 characters length with at least:
            <ul>
              <li> One Capital letter</li>
              <li> One number</li>
              <li> One special character</li>
            </ul>
            </small>
        </>
          
          }
    </div>
  )
}

export default PasswordInput