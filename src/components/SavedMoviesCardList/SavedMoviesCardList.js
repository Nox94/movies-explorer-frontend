import '../../common.css';
import MoviesCard from "../Movies/MoviesCard/MoviesCard.js";
import {checkLocalStorage, getFromLocalStorage} from "../../utils/ExtraFunctions.js";
import {useState} from 'react'

function SavedMoviesCardList(props) {
    const key = 'savedMovies'
    const onDelete = props.onDelete;
// приходят все сохраненные карточки
    //при монтировании компонента создается стейт useState.
    // начальные данные для которого он берет из локальнго хранилища
    const [savedMovies, setSavedMovies] = useState(checkLocalStorage(key) ? getFromLocalStorage(key) : [])
    return (
        <section className="movies__container">
            <ul className="movies__card-list">
                {savedMovies.map((item) => (
                    <MoviesCard
                        movie={item}
                        key={item.id}
                        movieId={item.id}
                        nameRU={item.nameRU}
                        nameEN={item.nameEN}
                        image={item.image}
                        thumbnail={item.image}
                        trailer={item.trailer}
                        duration={item.duration}
                        country={item.country}
                        director={item.director}
                        year={item.year}
                        description={item.description}
                        onDelete={onDelete}

                    />
                ))}
            </ul>
        </section>
    )
}

export default SavedMoviesCardList;
