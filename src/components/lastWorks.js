import React, {Component} from 'react'
import {works} from '~s/lastWorks'

class LastWorks extends Component {
    render() {
        let sites = works.map((el, i) => {
            return (
                <a href = {el.link} key = {el.name} className = "lastWorks__link">
                    <img className = "lastWorks__img" src = {el.img} />
                    <h3 className = "lastWorks__head">{el.name}</h3>
                    <div className = "lastWorks__info">
                        <p>
                            <span className = "strong">Тип: </span>{el.type}
                        </p>
                        <p>
                            <span className = "strong">Роль: </span>{el.role}
                        </p>
                        <p>
                            <span className = "strong">Стек: </span>{el.techology}
                        </p>
                    </div>
                    <p className = "lastWorks__description">{el.description}</p>
                </a>
            )
        })
        return (
            <div className = "content lastWorks">
                {sites}
            </div>
        )
    }
}

export default LastWorks