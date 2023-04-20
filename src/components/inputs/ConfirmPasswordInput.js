

const ConfirmPasswordInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className="mb-2">
        <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
        <input type="password" name='confirmPassword' className={`form-control ${touched && errors && "is-invalid"}`} id="confirmPassword"
        value={value} onChange={onChange} onBlur={onBlur}/>
        {touched && errors && 
        <small className='text-danger'>{errors}</small>}
    </div>
  )
}

export default ConfirmPasswordInput