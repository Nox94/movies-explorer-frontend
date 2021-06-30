import '../../../common.css';
import './techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <h2 className="heading techs__heading">Технологии</h2>
            <hr className="line techs__line" noshade="true" size="1" color="#000000"/>
            <h3 className="techs__subheading">7 технологий</h3>
            <p className="text techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте.</p>
            <ul className="techs__list">
                <li className="techs__list-item">HTML</li>
                <li className="techs__list-item">CSS</li>
                <li className="techs__list-item">JS</li>
                <li className="techs__list-item">React</li>
                <li className="techs__list-item">Git</li>
                <li className="techs__list-item">Express.js</li>
                <li className="techs__list-item">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;
