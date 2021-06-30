import '../../common.css';
import './footer.css'
import {useLocation} from "react-router-dom";

function Footer() {
    const location = useLocation();
    return (
        <footer
            className={(location.pathname === "/profile" || location.pathname === "/signin" || location.pathname === "/signup") ? "hidden" : "footer"}>
            <h2 className="footer__heading">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <hr className="footer__line" noshade="true" size="1" color="#EDEDED"/>
            <div className="footer__wide-screen-wrapper">
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a className="footer__link link" href="https://practicum.yandex.ru/">
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a className="footer__link link" href="https://github.com/yandex-praktikum">
                            Github
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a className="footer__link link" href="https://www.facebook.com/yandex.praktikum/">
                            Facebook
                        </a>
                    </li>
                </ul>
                <p className="footer__copyright">&#169;2021</p>
            </div>
        </footer>
    )
}

export default Footer;
