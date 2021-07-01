import '../../common.css';
import './form.css'
import {Link, Route, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo.js";

const email = "sss@ya.ru";
const name = "Евгения";
const password = 12345678;
const violet = {
    color: "#5934EE"
}

export default function Form() {
    const location = useLocation();
    return (
        <>
            <form className="form" noValidate={true}>
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
                                value={name}
                                id="form__name-input"
                                required={true}
                            />
                        </Route>
                        <label className="form__label" htmlFor="form__email-input">E-mail</label>
                        <input
                            className="form__input"
                            value={email} id="form__email-input"
                            type="email"
                            required={true}
                        />
                        <label className="form__label" htmlFor="form__password-input">Пароль</label>
                        <input
                            className="form__input"
                            type="password"
                            id="form__password-input"
                            required={true}
                            value={(location.pathname === "/signup") ? {password} : ''}
                            style={(location.pathname === "/signup") ? {margin: '0 0 6px 0'} : {margin: '0'}}
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
                                <Link to="/signup" className="link form__link" style={violet}>Регистрация</Link>
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
                                <Link to="/signin" className="link form__link" style={violet}>Войти</Link>
                            </div>
                        </Route>
                    </div>
                </div>
            </form>

        </>
    )
}
