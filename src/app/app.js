import React, {Component} from 'react'
import Header from '~c/header'
import Greetings from '~c/greetings'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <Greetings />
                </main>
            </div>
        )
    }
}

export default App