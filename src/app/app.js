import React, {Component} from 'react'
import styles from './app.module.css'
import Header from '~c/header'
import LastWorks from '~c/lastWorks'
import Footer from '~c/footer'
import MainPage from '~c/mainPage'
import Contacts from '~c/contacts'
import Error from '~c/404'

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <main>
                        <Switch>
                            <Route path = "/works" component = {LastWorks} />
                            <Route path = "/contacts" component = {Contacts} />
                            <Route exact path = "/" component = {MainPage} />
                            <Route path = "*" component = {Error} />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App