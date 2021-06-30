import './aboutProject.css';
import '../../../common.css';

function AboutProject() {
    return (
        <section className="about" id="aboutProject">
            <h2 className="heading about__heading">О проекте</h2>
            <hr className="line about__line" noshade="true" size="1" color="#000000"/>
            <div className="about__wrapper-wide-screen">
                <div className="about__text-block-wrapper">
                    <h3 className="subheading about__subheading">Дипломный проект включал 5 этапов</h3>
                    <p className="text  about__text">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className="about__text-block-wrapper">
                    <h3 className="subheading about__subheading">На выполнение диплома ушло 5 недель</h3>
                    <p className="text about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__wrapper">
                <p className="about__week">1 неделя</p>
                <p className="about__weeks">4 недели</p>
            </div>
            <div className="about__wrapper">
                <p className="about__backend-text">Back-end</p>
                <p className="about__frontend-text">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
