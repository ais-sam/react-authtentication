

const RoleInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className='mt-4 mb-4'>
        <label htmlFor="role" className="form-label">Role</label>
        <select className="form-select" name="role" id="role" aria-label="Default select example"
        value={value} onChange={onChange} onBlur={onBlur}>
            <option value="">Select a role</option>
            <option value="client">Client</option>
            <option value="admin">Admin</option>
        </select>
        {touched && errors && 
        <small className='text-danger'>{errors}</small>}
    </div>
  )
}

export default RoleInput