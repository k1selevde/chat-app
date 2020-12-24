import * as React from 'react'


import {withFormik} from "formik";

import validateForm from '../../../utils/helpers/validateForm';
import LoginForm from '../components/LoginForm';

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    validate(values) {
        let errors = {};
        validateForm({ isAuth: false, values, errors });
        return errors;
    },
    handleSubmit: () => {console.log( 'F12')},
    displayName: 'LoginForm',
})(LoginForm);

export default LoginFormContainer;



