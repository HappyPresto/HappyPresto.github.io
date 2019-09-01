import React, {Component} from 'react'
import {socialStore} from '~s/socialStore'

class Greetings extends Component {
    render() {
        let social = socialStore.map((element, i) => {
            return (
                <li key = {element.name} className = "social__el">
                    <a className = "social__logo" href = {element.link}>
                        <img className = "social__img" src = {element.img} alt = {element.name} />
                    </a>
                </li>
            )
        })
        return (
            <div className = "greetings">
                <div className = "content greetings__block">
                    <div className = "greetings__main">
                        <p className = "greetings__main_name">Yura Vasilets</p>
                        <p className = "greetings__main_job">Front-End Web Developer</p>
                        <ul className = "greetings__main_social social">
                            {social}
                        </ul>
                    </div>
                    <div className = "greetings__photo">
                        <img src = "/img/profilePhoto.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Greetings