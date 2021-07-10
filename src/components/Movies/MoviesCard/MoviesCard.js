import '../../../common.css';
import './moviesCard.css';
import {useLocation} from "react-router-dom";
import {useContext, useState} from "react";
import {CurrentUserContext} from "../../../contexts/contexts.js";
import * as mainApi from "../../../utils/MainApi.js";

function MoviesCard(props) {
    const {movie, movieId, nameRU, image, trailer, duration, country, director} = props;
    const location = useLocation();
    const user = useContext(CurrentUserContext);
   /* const isOwner = owner === user._id;
    const btnClassName = `${isOwner ? "card__remove-button" : "card__save-button"}`;*/
    const time = duration;
    const hours = Math.floor(time / 60) + "ч";
    const minutes = time % 60 + "м";

    return (
        <>
            <li className="card" key={movieId}>
                <img src={image} alt="Миниатюра постера фильма." className="card__image"/>
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
                    className="card__save-button"
                    type="button"
                    // onClick={handleMovieSaving}
                >
                    {(location.pathname === "/movies") ? "Сохранить" : ""}
                </button>
            </li>
        </>
    )
}

export default MoviesCard;
