import {Link, Route, useLocation} from "react-router-dom";
import '../../common.css';
import './header.css';
import Navigation from "./Navigation/Navigation.js";
import Logo from "../Logo/Logo.js";
import {HeaderPlum, HeaderWhite} from "../../utils/Constants.js";


function Header() {
    const location = useLocation();
    return (
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
            <header className="header"
                    style={(location.pathname === "/") ? HeaderPlum : HeaderWhite}>
                <Link className="link" to="/"><Logo/></Link>
                <Route exact path="/">
                    <div className="header__link-wrapper">
                        <Link to="/signup" className="header__register-link">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__login-link">
                            Войти
                        </Link>
                    </div>
                </Route>

                <Route path={["/movies", "/saved-movies", "/profile"]}>
                    <Navigation/>
                </Route>
            </header>
        </Route>
    )
}

export default Header;
