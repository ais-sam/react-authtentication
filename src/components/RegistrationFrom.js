import React, { useState } from "react";
import FirstNameInput from "./inputs/FirstNameInput";
import LastNameInput from "./inputs/LastNameInput";
import EmailInput from "./inputs/EmailInput";
import RoleInput from "./inputs/RoleInput";
import PhoneInput from "./inputs/PhoneInput";
import PasswordInput from "./inputs/PasswordInput";
import ConfirmPasswordInput from "./inputs/ConfirmPasswordInput";
import TermsInput from "./inputs/TermsInput";
import RedirectionLink from "./RedirectionLink";
import SubmitButton from "./SubmitButton";
import Message from "./Message";
import useValidateRegistrationData from "../hooks/useValidateRegisterationData";

const RegistrationFrom = () => {
  const [message, setMessage] = useState("");
  const formik = useValidateRegistrationData(setMessage)

  return (
    <form
      className="bg-white p-3 text-start w-100 shadow-sm "
      onSubmit={formik.handleSubmit}
    >
      {message && <Message type="failure" message={message} />}
      <div className="d-flex flex-column flex-lg-row gap-4">
        <div>
          <FirstNameInput
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.firstName}
            errors={formik.errors.firstName}
          />
          <LastNameInput
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.lastName}
            errors={formik.errors.lastName}
          />
          <EmailInput
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            errors={formik.errors.email}
          />
          <RoleInput
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.role}
            errors={formik.errors.role}
          />
        </div>

        <div>
          <PhoneInput
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.phone}
            errors={formik.errors.phone}
          />
          <PasswordInput
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.password}
            errors={formik.errors.password}
          />
          <ConfirmPasswordInput
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.confirmPassword}
            errors={formik.errors.confirmPassword}
          />
        </div>
      </div>

      <TermsInput
        value={formik.values.terms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.terms}
        errors={formik.errors.terms}
      />
      <SubmitButton type="register" disabled={!formik.isValid || formik.isSubmitting} />
      <RedirectionLink type="register" />
    </form>
  );
};

export default RegistrationFrom;

