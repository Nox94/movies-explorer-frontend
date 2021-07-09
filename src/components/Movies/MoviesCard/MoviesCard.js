import '../../../common.css';
import './moviesCard.css';
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/contexts.js";

function MoviesCard(props) {
    const {movie, idKey, nameRU, imageLink, trailerLink, duration, owner} = props;
    const location = useLocation();
    const user = useContext(CurrentUserContext);
    const isOwner = owner === user._id;
    const btnClassName = `${isOwner ? "card__remove-button" : "hidden"}`;
    const time = duration;
    const hours = Math.floor(time / 60) + "ч";
    const minutes = time % 60 + "м";

    return (
        <>
            <li className="card" key={idKey}>
                <img src={imageLink} alt="Миниатюра постера фильма." className="card__image"/>
                <div className="card__wrapper">
                    <p className="card__capture">{nameRU}</p>
                    {time > 60
                        ? <span className="card__timing">{hours} {minutes}</span>
                        : (time === 60)
                            ? <span className="card__timing">1ч</span>
                            : <span className="card__timing">{minutes}</span>
                    }
                </div>
                <button
                    className={btnClassName}>{(location.pathname === "/movies") ? "Сохранить" : ""}</button>
            </li>
        </>
    )
}

export default MoviesCard;
