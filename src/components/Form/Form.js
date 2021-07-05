import '../../common.css';
import './form.css'
import {Link, Route, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo.js";
import {Violet} from "../../utils/Constants.js";
import {useState} from "react";

export default function Form(props) {
    const location = useLocation();
    const [state, setState] = useState({});

    function handleChange(e) {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (location.pathname === '/signup') {
            props.onRegisterSubmit(state); //передаю значения инпутов
            setState(''); //очищаю стейт
        } else {
            props.onLoginSubmit(state); //передаю значения инпутов
            setState(''); //очищаю стейт
        }
    }

    return (
        <>
            <form className="form" noValidate={true} onSubmit={handleSubmit}>
                <Link to="/" className="form__logo link"><Logo/></Link>
                <Route path="/signup">
                    <h2 className="form__heading">Добро пожаловать!</h2>
                </Route>
                <Route path="/signin">
                    <h2 className="form__heading">Рады видеть!</h2>
                </Route>
                <div className="wrapper">
                    <div className="form__input-wrapper">
                        <Route path="/signup">
                            <label className="form__label " htmlFor="form__name-input">Имя</label>
                            <input
                                className="form__input"
                                type="text"
                                name={'name'}
                                value={state.name || ''}
                                id="form__name-input"
                                minLength={2}
                                maxLength={40}
                                autoComplete="off"
                                required
                                onChange={handleChange}
                            />
                        </Route>
                        <label className="form__label" htmlFor="form__email-input">E-mail</label>
                        <input
                            className="form__input"
                            name={'email'}
                            value={state.email || ''}
                            id="form__email-input"
                            type="email"
                            required
                            onChange={handleChange}
                        />
                        <label className="form__label" htmlFor="form__password-input">Пароль</label>
                        <input
                            className="form__input"
                            type="password"
                            id="form__password-input"
                            minLength={8}
                            maxLength={60}
                            autoComplete="off"
                            required
                            name={'password'}
                            value={state.password || ''}
                            style={(location.pathname === "/signup") ? {margin: '0 0 6px 0'} : {margin: '0'}}
                            onChange={handleChange}
                        />
                        <Route path="/signup">
                            <span className="form__error-message">Что-то пошло не так...</span>
                        </Route>
                    </div>

                    <div className="form__wrapper">
                        <Route path="/signin">
                            <button className="form__button" type="submit">
                                Войти
                            </button>
                        </Route>
                        <Route path="/signup">
                            <button className="form__button" type="submit">
                                Зарегистрироваться
                            </button>
                        </Route>

                        <Route path="/signin">
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <p className="form__text">Ещё не зарегистрированы?</p>
                                <Link to="/signup" className="link form__link" style={Violet}>Регистрация</Link>
                            </div>
                        </Route>
                        <Route path="/signup">
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <p className="form__text">Уже зарегистрированы?</p>
                                <Link to="/signin" className="link form__link" style={Violet}>Войти</Link>
                            </div>
                        </Route>
                    </div>
                </div>
            </form>
        </>
    )
}
