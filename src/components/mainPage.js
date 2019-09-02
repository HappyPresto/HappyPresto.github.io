import React, {Component} from 'react'
import Greetings from '~c/greetings'
import AboutMe from '~c/aboutMe'
import Knowledge from '~c/knowledge'
import LastWorks from '~c/lastWorks'

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                    <Greetings />
                    <AboutMe />
                    <Knowledge />
                    <LastWorks />
            </React.Fragment>
        )
    }
}

export default MainPage