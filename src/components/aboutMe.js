import React, {Component} from 'react'

class AboutMe extends Component {

    render() {
        let info = infoAboutMe().map((el, i) => {
            if (el.valueToLink !== "") {
                return (
                    <li key = {el.name} className = "aboutMe__info_el">
                        <span className = "aboutMe__info_elName">
                                {el.name}
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
                        {el.name}
                    </span>
                    <span className = "aboutMe__info_elValue">
                        {el.value}
                    </span>
                </li>
            )
            
        })
        return(
            <div className = "content aboutMe">
                <div className = "aboutMe__description">
                    <p>Привет! Меня зовут Юра и я Front-End разработчик. Учился 5 лет (специалист) в университете г. Комсомольск-на-Амуре.
                        После окончания университета переехал в Москву, в которой живу уже почти 4 года. Последние 3.5 года работал в SEO агентстве,
                        но сейчас хочется работать над более сложными и интересными задачами, поэтому я стал изучать React и ищу новую работу.
                    </p>
                </div>
                <div className = "aboutMe__info">
                    {info}
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
            value: "26"
        },
        {
            name: "Город",
            value: "Москва"
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