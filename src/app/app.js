import React, {Component} from 'react'
import Header from '~c/header'
import Greetings from '~c/greetings'
import AboutMe from '~c/aboutMe'
import Knowledge from '~c/knowledge'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <Greetings />
                    <AboutMe />
                    <Knowledge />
                </main>
            </div>
        )
    }
}

export default App