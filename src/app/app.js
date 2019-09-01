import React, {Component} from 'react'
import Header from '~c/header'
import Greetings from '~c/greetings'
import AboutMe from '~c/aboutMe'
import Knowledge from '~c/knowledge'
import LastWorks from '~c/lastWorks'

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
            </div>
        )
    }
}

export default App