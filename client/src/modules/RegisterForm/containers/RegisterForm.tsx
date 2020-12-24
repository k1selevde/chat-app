import * as React from 'react'


import {withFormik} from "formik";


import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/helpers/validateForm";


const RegisterFormContainer  = withFormik({
    enableReinitialize: true,

    validate(values) {
        let errors = {};
        validateForm({ isAuth: true, values, errors });
        return errors;
    },

    handleSubmit: () => {console.log( 'F12')}

})(RegisterForm);

export default RegisterFormContainer;