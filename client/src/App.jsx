import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Auth} from './pages'


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Auth />
            </div>
        )
    }
}

export default App;