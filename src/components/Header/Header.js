import {Link, Route, useLocation} from "react-router-dom";
import '../../common.css';
import './header.css';
import React from "react";
import Navigation from "./Navigation/Navigation.js";
import Logo from "../Logo/Logo.js";
import {HeaderPlum, HeaderWhite} from "../../utils/Constants.js";
import {LoggedInContext} from "../../contexts/contexts.js";

function Header() {
    const {loggedIn} = React.useContext(LoggedInContext)
    const location = useLocation();
    let nav;
    if (!loggedIn) {
        nav = <div className="header__link-wrapper">
            <Link to="/signup" className="header__register-link">
                Регистрация
            </Link>
            <Link to="/signin" className="header__login-link">
                Войти
            </Link>
        </div>;
    } else {
        nav = <Navigation/>;
    }

    return (
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
            <header className="header"
                    style={(location.pathname === "/") ? HeaderPlum : HeaderWhite}>
                <Link className="link" to="/"><Logo/></Link>
                {/*{nav}*/}
                <p>{console.log('header says г к', loggedIn)}</p>
                {loggedIn ? <Navigation/> : <div className="header__link-wrapper">
                    <Link to="/signup" className="header__register-link">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="header__login-link">
                        Войти
                    </Link>
                </div>}
            </header>
        </Route>
    )
}

export default Header;
