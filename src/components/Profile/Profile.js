import '../../common.css';
import './profile.css'

const name = "Евгения";
const email = "sss@ya.ru"

function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__heading">Привет, Евгения!</h2>
            <form className="form">
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="input-name">
                        Имя
                    </label>
                    <input className="profile__input" id="input-name" value={name} type={'text'}/>
                </div>
                <hr className="line profile__line" size={'1'} color={'#EDEDED'}/>
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="input-email">
                        E-mail
                    </label>
                    <input className="profile__input" id="input-email" value={email} type={'email'}/>
                </div>
            </form>

            <a className="profile__link link" href="#">Редактировать</a>
            <a className="profile__link link" href="#">Выйти из аккаунта</a>
        </section>
    )
}

export default Profile;
