import React, {Component} from 'react'

class Greetings extends Component {
    render() {
        let social = socialStore().map((element, i) => {
            return (
                <li key = {element.name} className = "social__el">
                    <a className = "social__logo" href = {element.link} style={{width: "40px", height: "40px", display: "block"}}>
                        <img className = "social__img" src = {element.img} alt = {element.name} />
                    </a>
                </li>
            )
        })
        return (
            <div className = "content greetings">
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
        )
    }
}

export default Greetings

function socialStore() {
    return [
        {
            name: 'linkedIn',
            link: 'https://www.linkedin.com/in/yura-vasilets-793648111/',
            img: '/img/linkedin.svg'
        },
        {
            name: 'github',
            link: 'https://github.com/HappyPresto/',
            img: '/img/github.svg'
        },
        {
            name: 'vk',
            link: 'https://vk.com/koiepresto',
            img: '/img/vk.svg'
        },
        {
            name: 'mail',
            link: 'mailto:darkstar54@mail.ru',
            img: '/img/mail.svg'
        }
    ]
}