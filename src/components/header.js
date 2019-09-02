import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <div className = "content header">
                    <div className = "header__logo">
                        <p className = "header__logo_name">
                            <NavLink to = "/">
                                <span className = "yellow">
                                    Y
                                </span>ura
                                <span className = "yellow">
                                    V
                                </span>asilets
                            </NavLink>
                        </p>
                    </div>
                    <nav className = "header__nav">
                        <ul className = "header__nav_list">
                            <li className = "header__nav_el">
                                <NavLink activeStyle = {{color: "#777"}} to = "/works">Работы</NavLink>
                            </li>
                            <li className = "header__nav_el">
                                <NavLink activeStyle = {{color: "#777"}} to = "/contacts">Контакты</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header