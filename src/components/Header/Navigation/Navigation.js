import './navigation.css';
import '../../../common.css';
import {Link} from "react-router-dom";
import React from "react";
import icon from '../../../images/icon_account.svg';
import useWindowSize from "../../../hooks/useWindowSize.js";

function Navigation() {

    const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
    const {width} = useWindowSize();

    function handleMenuClick() {
        setIsNavMenuOpen(!isNavMenuOpen);
    }

    return <section className="navigation">
        {width <= 1000 && <>
            <button className="navigation__burger" onClick={handleMenuClick}/>
            <div className={`${isNavMenuOpen && "navigation__cover"}`}/>
            <div className={`navigation__popup ${isNavMenuOpen && "navigation__popup_visible"}`}>
                <button className="navigation__close-button" type="button" onClick={handleMenuClick}/>
                <div className="navigation__wrapper">
                    <ul className="navigation__links">
                        <li className="navigation__list-item">
                            <Link to="/" className="link navigation__link" tabindex="-1">
                                <button className="navigation__page-button" type="button"
                                        onClick={handleMenuClick}>Главная
                                </button>
                            </Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link to="/movies" className="link navigation__link" tabindex="-1">
                                <button className="navigation__page-button" type="button"
                                        onClick={handleMenuClick}>Фильмы
                                </button>
                            </Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link to="/saved-movies" className="link navigation__link" tabindex="-1">
                                <button className="navigation__page-button" type="button"
                                        onClick={handleMenuClick}>Сохранённые фильмы
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/profile" className="link navigation__account-link" tabindex="-1">
                        <button className="navigation__profile-button" type="button" onClick={handleMenuClick}>
                            <img className="navigation__icon-account" src={icon} alt="Иконка кнопки аккаунта."/>
                            Аккаунт
                        </button>
                    </Link>
                </div>
            </div>
        </>}
        {width >= 1000 && <div className="navigation__wrapper">
            <ul className="navigation__links">
                <li className="navigation__list-item">
                    <Link to="/movies" className="link navigation__link">Фильмы</Link>
                </li>
                <li className="navigation__list-item">
                    <Link to="/saved-movies" className="link navigation__link">Сохранённые фильмы</Link>
                </li>
            </ul>
            <Link to="/profile" className="link navigation__account-link" tabindex="-1">
                <img className="navigation__icon-account" src={icon} alt="Иконка кнопки аккаунта."/>
                Аккаунт
            </Link>
        </div>}
    </section>
}

export default Navigation;
