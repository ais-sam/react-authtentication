

const LastNameInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className="mb-2">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" name="lastName" className={`form-control ${touched && errors && "is-invalid"}`} id="lastName"
        value={value} onChange={onChange} onBlur={onBlur}/>
        {touched && errors && 
        <small className='text-danger'>{errors}</small>}
    </div>
  )
}

export default LastNameInput