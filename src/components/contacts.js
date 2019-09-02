import React, {Component} from 'react'
import {socialStore} from '~s/socialStore'

class Contacts extends Component {
    render() {
        let info = socialStore.map((element, i) => {
            return (
                <li key = {element.name} className = "social__el">
                    <a className = "social__logo" href = {element.link}>
                        <img className = "social__img" src = {element.img} alt = {element.name} />
                    </a>
                </li>
            )
        })
        return (
            <div className = "content contacts">
                <div className = "contacts__block">
                    <h2 className = "contacts__head">Контакты</h2>
                    <span className = "yellow__line"></span>
                </div>
                <div className = "contacts__phone">
                        <span>Телефон:</span>
                        <a href = "tel:+79161943102">+7-916-194-31-02</a>
                </div>
                <ul className = "contacts__list">
                    {info}
                </ul>
            </div>
        )
    }
}

export default Contacts