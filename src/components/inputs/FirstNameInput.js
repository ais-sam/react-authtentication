

const FirstNameInput = ({value, onChange, onBlur,touched, errors }) => {
  return (
    <div className="mb-2">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" name="firstName" className={`form-control ${touched && errors && "is-invalid"}`} id="firstName"
        value={value} onChange={onChange} onBlur={onBlur}/>
        {touched && errors && 
        <small className='text-danger'>{errors}</small>}
    </div>
  )
}

export default FirstNameInput