import '../../common.css';
import './profile.css'
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/contexts.js";
import {Link} from "react-router-dom";


function Profile(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const user = useContext(CurrentUserContext);
    const handleLogout = props.onLogout;

    function handleChange(e) {
        const target = e.target;
        target.name === "name" && setName(target.value);
        target.name === "email" && setEmail(target.value);
    }

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        props.onDataChange(name, email); //передаю значения инпутов для запроса
        console.log(name, email);
    }

    return (
        <section className="profile">
            <h2 className="profile__heading">Привет, {user.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div style={{display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="input-name">
                        Имя
                    </label>
                    <input
                        className="profile__input"
                        name={'name'}
                        id="input-name"
                        value={name || ''}
                        type={'text'}
                        onChange={handleChange}
                        required
                    />
                </div>
                <hr className="line profile__line" size={'1'} color={'#EDEDED'}/>
                <div className="profile__wrapper">
                    <label className="profile__label" htmlFor="input-email">
                        E-mail
                    </label>
                    <input
                        className="profile__input"
                        name={'email'}
                        id="input-email"
                        value={email || ''}
                        type={'email'}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="profile__button link" type="submit">Редактировать</button>
                </div>
            </form>

            <Link to="/signin" className="profile__link link" onClick={handleLogout}>Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile;
