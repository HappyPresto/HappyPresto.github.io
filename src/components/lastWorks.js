import React, {Component} from 'react'
import {works} from '~s/lastWorks'
import { worksVue } from '../store/lastWorks'

class LastWorks extends Component {
    render() {
        let sites = works.map((el, i) => {
            return (
                <a href = {el.link} key = {el.name} className = "lastWorks__link" target="_blank">
                    <img className = "lastWorks__img" src = {el.img} />
                    <h3 className = "lastWorks__linkName">{el.name}</h3>
                    <div className = "lastWorks__info">
                        <p>
                            <span className = "strong">Тип: </span><span>{el.type}</span>
                        </p>
                        <p>
                            <span className = "strong">Роль: </span><span>{el.role}</span>
                        </p>
                        <p>
                            <span className = "strong">Стек: </span><span>{el.techology}</span>
                        </p>
                    </div>
                    <p className = "lastWorks__description">{el.description}</p>
                </a>
            )
        });
        let VueWorks = worksVue.map((el) => {
            return (
                <a href = {el.link} key = {el.name} className = "lastWorks__link" target="_blank">
                    <img className = "lastWorks__img" src = {el.img} />
                    <h3 className = "lastWorks__linkName">{el.name}</h3>
                    <div className = "lastWorks__info">
                        <p>
                            <span className = "strong">Тип: </span><span>{el.type}</span>
                        </p>
                        <p>
                            <span className = "strong">Роль: </span><span>{el.role}</span>
                        </p>
                        <p>
                            <span className = "strong">Стек: </span><span>{el.techology}</span>
                        </p>
                    </div>
                    <p className = "lastWorks__description">{el.description}</p>
                </a>
            )
        });
        return (
            <div className = "lastWorks">
                <div className = "content lastWorks__block">
                    <h2 className = "lastWorks__head">Vue</h2>
                    <span className = "yellow__line"></span>
                    <div className = "lastWorks__list">
                        {VueWorks}
                    </div>
                    <h2 className = "lastWorks__head">Последние работы</h2>
                    <span className = "yellow__line"></span>
                    <div className = "lastWorks__list">
                        {sites}
                    </div>
                </div>
            </div>
        )
    }
}

export default LastWorks