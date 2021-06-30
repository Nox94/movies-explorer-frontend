import picture from "../../../images/movie_pic.png";
import '../../../common.css';
import './moviesCard.css';
import {useLocation} from "react-router-dom";

function MoviesCard() {
    const location = useLocation();
    return (
        <>
            <li className="card">
                <img src={picture} alt="Миниатюра постера фильма." className="card__image"/>
                <div className="card__wrapper">
                    <p className="card__capture">33 слова о дизайне</p>
                    <span className="card__timing">1ч 17м</span>
                </div>
                <button
                    className={(location.pathname === "/movies") ? "card__save-button" : "card__remove-button"}>{(location.pathname === "/movies") ? "Сохранить" : ""}</button>
            </li>
            <li className="card">
                <img src={picture} alt="Миниатюра постера фильма." className="card__image"/>
                <div className="card__wrapper">
                    <p className="card__capture">33 слова о дизайне</p>
                    <span className="card__timing">1ч 17м</span>
                </div>
                <button className={(location.pathname === "/movies") ? "card__saved-icon" : "card__remove-button"}/>
            </li>
            <li className="card">
                <img src={picture} alt="Миниатюра постера фильма." className="card__image"/>
                <div className="card__wrapper">
                    <p className="card__capture">33 слова о дизайне</p>
                    <span className="card__timing">1ч 17м</span>
                </div>
                <button
                    className={(location.pathname === "/movies") ? "card__save-button" : "card__remove-button"}>{(location.pathname === "/movies") ? "Сохранить" : ""}</button>
            </li>
            <li className="card">
                <img src={picture} alt="Миниатюра постера фильма." className="card__image"/>
                <div className="card__wrapper">
                    <p className="card__capture">33 слова о дизайне</p>
                    <span className="card__timing">1ч 17м</span>
                </div>
                <button className={(location.pathname === "/movies") ? "card__saved-icon" : "card__remove-button"}/>
            </li>
        </>
    )
}

export default MoviesCard;
