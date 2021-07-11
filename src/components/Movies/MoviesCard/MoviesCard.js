import '../../../common.css';
import './moviesCard.css';
import {useLocation} from "react-router-dom";
import {useContext, useState} from "react";
// import {CurrentUserContext} from "../../../contexts/contexts.js";

function MoviesCard(props) {
    const {movie, movieId, nameRU, image, trailer, duration, country, director} = props;
    const time = duration;
    const hours = Math.floor(time / 60) + "ч";
    const minutes = time % 60 + "м";
    const location = useLocation();
    // const user = useContext(CurrentUserContext);
    const onSave = props.onSave;
    const onDelete = props.onDelete;
    const BeatFilmUrl = "https://api.nomoreparties.co";
    const [state, setState] = useState({
        country: movie.country === null ? "null" : movie.country,
        director: movie.director === null ? "null" : movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image:
            typeof movie.image === "string"
                ? movie.image
                : BeatFilmUrl + movie.image.url,
        trailer: movie.trailer
            ? movie.trailer
            : movie.trailerLink === null
                ? "null"
                : movie.trailerLink,
        nameRU: movie.nameRU === null ? "null" : movie.nameRU,
        nameEN:
            movie.nameEN === null
                ? "null"
                : movie.nameEN === ""
                ? (movie.nameEN = "name")
                : movie.nameEN,
        thumbnail: movie.thumbnail
            ? movie.thumbnail
            : BeatFilmUrl + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        owner: movie.owner ? movie.owner : null,
        _id: movie._id ? movie._id : null,
    });

    // console.log(props.onDelete);
    // console.log(movie);

    function handleSaveClick() {
        const {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
        } = state;
        onSave({
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
        });
    }

    function handleDeleteClick() {
        onDelete(state); // передаю всю карточку в ф-цию удаления, оттуда она возьмет id
    }

    /* const isOwner = owner === user._id;
     const btnClassName = `${isOwner ? "card__remove-button" : "card__save-button"}`;*/

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
                {(location.pathname === "/movies")
                    ?
                    <button
                        className="card__save-button"
                        type="button"
                        onClick={handleSaveClick}>
                        Сохранить
                    </button>
                    :
                    <button
                        className="card__remove-button"
                        type="button"
                        onClick={handleDeleteClick}
                    />}
            </li>
        </>
    )
}

export default MoviesCard;
