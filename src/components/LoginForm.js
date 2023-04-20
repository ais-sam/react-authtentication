import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';
import RedirectionLink from './RedirectionLink';
import SubmitButton from './SubmitButton';
import Message from './Message';
import { useState } from 'react';
import useValidateLoginData  from '../hooks/useValidateLoginData';


const LoginForm = () => {

  const [message, setMessage] = useState('')
  const formik = useValidateLoginData(setMessage)

  return (
    <form className='bg-white p-3 text-start rounded-3 shadow-sm' onSubmit={formik.handleSubmit}>
      {message && <Message type="failure" message={message} />}
      
      <EmailInput value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} touched={formik.touched.email} errors={formik.errors.email}/>
      <PasswordInput value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touched={formik.touched.password} errors={formik.errors.password}/>
      <SubmitButton type="login" disabled={!formik.isValid}/>
       
      <RedirectionLink type="login"/>

    </form>
  );
  
}

export default LoginForm