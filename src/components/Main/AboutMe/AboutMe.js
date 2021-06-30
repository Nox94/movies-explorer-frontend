import '../../../common.css';
import './aboutMe.css';
import photo from '../../../images/photo__student.JPG';

const facebookLink = "https://www.facebook.com/shkarina.evgenia";
const githubLink = "https://github.com/Nox94";

function AboutMe() {
    return (
        <section className="student" id="student">
            <h2 className="heading student__heading">Студент</h2>
            <hr className="line student__line" noshade="true" size="1" color="#000000"/>
            <div className="student__wrapper-wide-screen">
                <img className="student__photo" src={photo} alt={'фотография студента'}/>
                <div className="student__text-group-wrapper">
                    <h3 className="student__subheading">Евгения</h3>
                    <div className="student__wrapper">
                        <p className="student__dev-text text">Фронтенд-разработчик, 27 лет</p>
                        <p className="student__text text">
                            Родилась в Усть-Каменогорске, живу в Мытищах, закончила факультет издательского дела в МИПК.
                            У меня есть сын. Люблю слушать музыку, а ещё увлекаюсь танцами.
                            Недавно начала кодить и хочу сменить профессию.
                        </p>
                        <div className="student__link-wrapper">
                            <a className="student__link link" href={facebookLink}>Facebook</a>
                            <a className="student__link link" href={githubLink}>Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
