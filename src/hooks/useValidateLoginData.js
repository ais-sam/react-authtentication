import { useFormik } from 'formik';
import * as Yup from "yup"
import useAuth from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';


const useValidateLoginData = (setMessage)=>{
    const {setAuth , setToken} = useAuth()
    const navigate = useNavigate()

  const onSubmit = async(values)=>{
    try {
      const response = await axios.post("login",values)
      const token = response?.data?.token
      const role = response?.data?.userData.role

      setAuth(response?.data?.userData)
      setToken(token)

      localStorage.setItem('_token',token)
      localStorage.setItem('auth',JSON.stringify(response?.data?.userData))

      // navigate to the dashboard page
      role === "client" ? navigate("/client") : navigate("/admin")
      
   
    } catch (error) {
      if (!error?.response) {
        setMessage("No response from the server");
      } else if (error.response.status === 400) {
        setMessage(error.response?.data?.message);
      } else {
        setMessage("Login failed");
      }
      
    }
    
  }

  const formik = useFormik({
    initialValues:{
        email: "",
        password: "",
    },
    validationSchema: Yup.object({
        email : Yup.string()
                    .email()
                    .required("Email is required"),
        password : Yup.string()
                    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,"Please enter a valid password")
                    .required("Please enter your password"),
    }),
    onSubmit
})

return formik
}

export default useValidateLoginData