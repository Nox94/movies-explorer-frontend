import './navTab.css';

function NavTab() {
    return (
        <section className="navTab">
            <ul className="navTab__list">
                <li className="navTab__list-unit">
                    <a className="navTab__link link" href="#aboutProject" target="_self">О проекте</a>
                </li>
                <li className="navTab__list-unit">
                    <a className="navTab__link link" href="#techs" target="_self">Технологии</a>
                </li>
                <li className="navTab__list-unit">
                    <a className="navTab__link link" href="#student" target="_self">Студент</a>
                </li>
            </ul>
        </section>
    )
}

export default NavTab;
