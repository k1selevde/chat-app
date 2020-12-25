import * as React from 'react'


import {withFormik} from "formik";


import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/helpers/validateForm";


const RegisterFormContainer  = withFormik({
    enableReinitialize: true,

    validate(values) {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

})(RegisterForm);

export default RegisterFormContainer;