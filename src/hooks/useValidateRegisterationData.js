import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const useValidateRegistrationData = (setMessage) => {
  const navigate = useNavigate();

  const onSubmit = async(values, onSubmitProps) => {
    const { firstName, lastName, email, phone, password, role } = values;
    const userData = { firstName, lastName, email, phone, password, role };

    try {
        const response = await axios.post("register",userData)

        if (response.status === 201) {
            onSubmitProps.setSubmitting(false)
            navigate("/login");
        } else {
          setMessage(response.data.message);
        }
        
      } catch (error) {
        setMessage(error.response.data.message);
      }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Your first name must be at least 3 characters long")
        .label("First Name")
        .required(),
      lastName: Yup.string()
        .min(3, "Your last name must be at least 3 characters long")
        .label("Last Name")
        .required(),
      email: Yup.string().email().required("Email is required"),
      role: Yup.string()
        .oneOf(["client", "admin"], "Please select a role")
        .required("Please select a role"),
      phone: Yup.string()
        .matches(
          /^(00213|\+213|0)(5|6|7)[0-9]{8}$/,
          "Please enter a valid phone number"
        )
        .required("Please enter your phone number"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
          `Please enter a valid password`
        )
        .required("Please enter your password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
      terms: Yup.bool().oneOf([true], "Please accept our terms and conditions"),
    }),
    onSubmit,
  });

  return formik;
};

export default useValidateRegistrationData;
