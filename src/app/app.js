import React, {Component} from 'react'
import styles from './app.module.css'
import Header from '~c/header'
import Greetings from '~c/greetings'
import AboutMe from '~c/aboutMe'
import Knowledge from '~c/knowledge'
import LastWorks from '~c/lastWorks'
import Footer from '~c/footer'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <Greetings />
                    <AboutMe />
                    <Knowledge />
                    <LastWorks />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App