import '../../../common.css';
import './moviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";

function MoviesCardList(props) {
    console.log(props);
    return (
        <section className="movies__container">
            <ul className="movies__card-list">
                {props.moviesCards.map((item) => (
                    <MoviesCard
                        movie={item}
                        key={item.id}
                        idKey={item.id}
                        nameRU={item.nameRU}
                        imageLink={"https://api.nomoreparties.co"+item.image.url}
                        trailerLink={item.trailerLink}
                        duration={item.duration}
                        owner={item.owner}
                        // onMovieSave={}
                        // onMovieRemoveFromSaved={}
                    />
                ))}
            </ul>
            <Route path="/movies">
                <button className="movies__more-button">Еще</button>
            </Route>
        </section>
    )
}

export default MoviesCardList;
