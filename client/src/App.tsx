import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom"

import {Auth, Home} from './pages'
import ForgotPassword from "./components/ForgotPassword";


let isAuth = true

function App() {
  return (
    <div className="container">
        <Switch>
            <Route
                exact
                path={["/signin", "/signup", "/signup/verify"]}
                component={Auth}
            />

            <Route
                path="/forgot-password"
                component={ForgotPassword}
            />

            <Route
                exact
                path="/"
                render={() => (isAuth ? <Home /> : <Redirect to="signin" />)}
            />
        </Switch>
    </div>
  );
}

export default App;

