import React, {Component} from 'react'

class Knowledge extends Component {
    render() {
        return (
            <div className = "knowledge">
                <div className = "content knowledge__block">
                    <h2 className = "knowledge__head">Технологии</h2>
                    <span className = "yellow__line"></span>
                    <div className = "knowledge__list">
                        <div className = "knowledge__half">
                            <div className = "knowledge__half_block">
                                <p className = "knowledge__half_blockName">
                                    FrontEnd:
                                </p>
                                <div className = "knowledge__half_blockList">
                                    <p className = "knowledge__half_blockElements">
                                        <strong>React -</strong> React, Redux, Redux-thunk, Hooks, mobx<br />
                                        <strong>Vue -</strong> Vue, Vuex
                                    </p>
                                    <p className = "knowledge__half_blockElements">
                                        JavaScript, ES6, ES7, ES8, ES2020,<br />JQuery, fetch, Ajax, JSON
                                    </p>
                                    <p className = "knowledge__half_blockElements">
                                        CSS3, SASS, SCSS, BEM
                                    </p>
                                    <p className = "knowledge__half_blockElements">
                                        HTML5, XSL, XML
                                    </p>
                                </div>
                            </div>
                            <div className = "knowledge__half_block">
                                <p className = "knowledge__half_blockName">
                                    BackEnd:
                                </p>
                                <div className = "knowledge__half_blockList">
                                    <p className = "knowledge__half_blockElements">
                                        PHP, MySQL, CMS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = "knowledge__half">
                            <div className = "knowledge__half_block">
                                <p className = "knowledge__half_blockName">
                                    Сборка:
                                </p>
                                <div className = "knowledge__half_blockList">
                                    <p className = "knowledge__half_blockElements">
                                        WebPack, Gulp
                                    </p>
                                </div>
                            </div>
                            <div className = "knowledge__half_block">
                                <p className = "knowledge__half_blockName">
                                    Прочее:
                                </p>
                                <div className = "knowledge__half_blockList">
                                    <p className = "knowledge__half_blockElements">
                                        SEO, Google PageSpeed
                                    </p>
                                    <p className = "knowledge__half_blockElements">
                                        Adobe Photoshop, Figma
                                    </p>
                                    <p className = "knowledge__half_blockElements">
                                        Git, GitHub, Jira
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Knowledge