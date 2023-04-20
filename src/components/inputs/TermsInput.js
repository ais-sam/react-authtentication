import { Link } from "react-router-dom"


const TermsInput = ({value, onChange, onBlur,touched, errors}) => {
  return (
    <div className="mb-2 form-check mt-3">
        <input checked={value} type="checkbox" name="terms" className="form-check-input" id="exampleCheck1" 
        value={value} onChange={onChange} onBlur={onBlur}/>
        <label className="form-check-label" htmlFor="exampleCheck1">
          <small>I agree to the <Link to="/terms-and-conditions">Terms and Conditions</Link></small>
        </label>
        {touched && errors && 
        <small className='text-danger d-block'>{errors}</small>}
      </div>
  )
}

export default TermsInput