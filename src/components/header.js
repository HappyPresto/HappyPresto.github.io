import React, {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <header>
                <div className = "content header">
                    <div className = "header__logo">
                        <p className = "header__logo_name">
                            <span className = "yellow">
                                Y
                            </span>ura
                            <span className = "yellow">
                                V
                            </span>asilets
                        </p>
                    </div>
                    <nav className = "header__nav">
                        <ul className = "header__nav_list">
                            <li className = "header__nav_el">
                                Работы
                            </li>
                            <li className = "header__nav_el">
                                    Контакты
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header