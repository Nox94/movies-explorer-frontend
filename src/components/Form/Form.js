import '../../common.css';
import './form.css'
import {Link, Route, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo.js";
import {Violet} from "../../utils/Constants.js";

export default function Form(props) {
    const {errors, values, isValid, onChangeInput, onSubmit} = props
    const location = useLocation();
    const qt = location.pathname === '/signin'

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form className="form" noValidate={true} onSubmit={handleSubmit} id={qt ? 'signinForm' : 'signupForm'}>
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
                            name={'signupName'}
                            value={values.signupName}
                            id="form__name-input"
                            minLength={2}
                            maxLength={40}
                            autoComplete="off"
                            required
                            onChange={onChangeInput}
                        />
{/*                        {errors.signupName &&
                        <span className="form__error-message form__error">{errors.signupName}</span>}*/}
                        <span className="form__error-message form__error">{errors.signupName}</span>
                    </Route>
                    <label className="form__label" htmlFor="form__email-input">E-mail</label>
                    <input
                        className="form__input"
                        name={qt ? 'signinEmail' : 'signupEmail'}
                        value={qt ? values.signinEmail : values.signupEmail}
                        id="form__email-input"
                        type="email"
                        required
                        onChange={onChangeInput}
                    />
{/*                    {qt ? errors.signinEmail : errors.signupEmail &&
                        <span
                            className="form__error-message form__error">{qt ? errors.signinEmail : errors.signupEmail}
                        </span>}*/}
                    <span
                        className="form__error-message form__error">{qt ? errors.signinEmail : errors.signupEmail}</span>
                    <label className="form__label" htmlFor="form__password-input">Пароль</label>
                    <input
                        className="form__input"
                        type="password"
                        id="form__password-input"
                        minLength={8}
                        maxLength={60}
                        autoComplete="off"
                        required
                        name={qt ? 'signinPassword' : 'signupPassword'}
                        value={qt ? values.signinPassword : values.signupPassword}
                        style={(location.pathname === "/signup") ? {margin: '0 0 6px 0'} : {margin: '0'}}
                        onChange={onChangeInput}
                    />
{/*                    {qt ? errors.signinPassword : errors.signupPassword &&
                        <p
                            className="form__error-message form__error">{qt ? errors.signinPassword : errors.signupPassword}</p>}*/}
                    <span
                        className="form__error-message form__error">{qt ? errors.signinPassword : errors.signupPassword}</span>
                </div>

                <div className="form__wrapper">
                    <button className="form__button" type="submit"
                            disabled={qt ? !isValid.signinForm : !isValid.signupForm}>
                        {qt ? 'Войти' : 'Зарегистрироваться'}
                    </button>

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
    )
}
