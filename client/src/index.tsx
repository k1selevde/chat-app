import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import App from './App';

//@ts-ignore
import store from './redux/store';

import './styles/index.scss';



const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>

)


ReactDOM.render(
    app
,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
