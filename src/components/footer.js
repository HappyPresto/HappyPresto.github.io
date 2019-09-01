import React, {Component} from 'react'
import {socialStore} from '~s/socialStore'

class Footer extends Component {
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
            <footer>
                <div className = "content footer">
                    <div className = "footer__info">
                        <p className = "footer__copy">&copy; 2019 </p><p className = "header__logo_name footer__logo_name"><span className = "yellow">Y</span>ura<span className = "yellow">V</span>asilets</p>
                    </div>
                    <ul className = "footer__list">
                        {info}
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer