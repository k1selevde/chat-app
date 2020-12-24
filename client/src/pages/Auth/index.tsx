import * as React from 'react'
import {Route} from 'react-router-dom'

import { LoginForm, RegisterForm } from "../../modules";

const Auth  = () => {
    return (
        <section className="auth">
            <div className="auth_content">
                <Route
                    exact
                    path="/signin"
                    component={LoginForm}
                />
                <Route
                    exact
                    path="/signup"
                    component={RegisterForm}
                />
                <Route
                    exact
                    path="/signup/verify"
                    component={LoginForm}
                />
            </div>
        </section>
    );
}

export default Auth;