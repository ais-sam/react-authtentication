

const PhoneInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className="mb-2">
        <label htmlFor="phone" className="form-label">Phone number</label>
        <input type="tel" name="phone" className={`form-control ${touched && errors && "is-invalid"}`} id="phone"
        value={value} onChange={onChange} onBlur={onBlur}/>
        {touched && errors && 
        <small className='text-danger'>{errors}</small>}
    </div>
  )
}

export default PhoneInput