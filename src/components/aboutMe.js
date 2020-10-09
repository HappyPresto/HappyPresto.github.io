import React, {Component} from 'react'

class AboutMe extends Component {

    render() {
        let info = infoAboutMe().map((el, i) => {
            if (el.valueToLink !== "") {
                return (
                    <li key = {el.name} className = "aboutMe__info_el">
                        <span className = "aboutMe__info_elName">
                                {el.name}:
                            </span>
                        <a href = {el.valueToLink} className = "aboutMe__info_elLink">
                            <span className = "aboutMe__info_elValue">
                                {el.value}
                            </span>
                        </a>
                    </li>
                )
            }
            return (
                <li key = {el.name} className = "aboutMe__info_el">
                    <span className = "aboutMe__info_elName">
                        {el.name}:
                    </span>
                    <span className = "aboutMe__info_elValue">
                        {el.value}
                    </span>
                </li>
            )
            
        })
        return(
            <div className = "aboutMe">
                <div className = "content">
                    <h2 className = "aboutMe__head">Обо мне</h2>
                    <span className = "yellow__line"></span>
                    <div className = "aboutMe__block">
                        <div className = "aboutMe__description">
                            <div className ="aboutMe__workPlace">
                                <p className ="aboutMe__workPlace-name">Места работы:</p>
                                <ul className ="aboutMe__workPlace-list">
                                    <li>SEO-Energy - (2016-2019) (Создание сайтов)</li>
                                    <li>Sport-Express - (2019 - по н.в.) (Работа с сайтом, создание нового функционала на Vue и React)</li>
                                </ul>
                            </div>
                            <div class="aboutMe__history">
                                <p>Привет! Меня зовут Юра и я Front-End разработчик. Учился 5 лет (специалист) в университете г. Комсомольск-на-Амуре.
                                После окончания университета переехал в Москву, в которой живу 5 лет. 3.5 года работал в SEO агентстве, но понял, что 
                                хочется работать над более сложными и интересными проектами, с этой целью стал изучать React, а затем и Vue. На данный 
                                момент работаю в компании Sport-Express, где уже успел поработать на Vue и React. Так же, в свободное время стараюсь
                                уделять время для изучения новых технологий или практикой уже изученных. На данный момент ищу работу в Санкт-Петербурге
                                в связи с переездом.</p>
                            </div>
                        </div>
                        <ul className = "aboutMe__info">
                            {info}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe

function infoAboutMe() {
    return [
        {
            name: "День рождения",
            value: "24 Мая 1993"
        },
        {
            name: "Возраст",
            value: "27"
        },
        {
            name: "Город",
            value: "Санкт-Петербург"
        },
        {
            name: "Университет",
            value: "КнАГТУ"
        },
        {
            name: "Уровень",
            value: "Специалист"
        },
        {
            name: "Английский язык",
            value: "Intermediate"
        },
        {
            name: "Корейский язык / 한국어",
            value: "4 уровень / 4급 (~B1 в англ)"
        },
        {
            name: "Вебсайт",
            value: "happypresto.github.io",
            valueToLink: "https://happypresto.github.io"
        },
        {
            name: "Телефон",
            value: "+7-916-194-31-02",
            valueToLink: "tel:+79161943102"
        },
        {
            name: "Почта",
            value: "darkstar54@mail.ru",
            valueToLink: "mailto:darkstar54@mail.ru"
        },
    ]
}