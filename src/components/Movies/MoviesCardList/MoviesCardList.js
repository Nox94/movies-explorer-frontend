import '../../../common.css';
import './moviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const movies = props.moviesCards;
    return (
        <section className="movies__container">
            <ul className="movies__card-list">
                {movies.map((item) => (
                    <MoviesCard
                        movie={item}
                        key={item.id}
                        movieId={item.id}
                        nameRU={item.nameRU}
                        nameEN={item.nameEN}
                        image={"https://api.nomoreparties.co" + item.image.url}
                        thumbnail={"https://api.nomoreparties.co" + item.image.url}
                        trailer={item.trailerLink}
                        duration={item.duration}
                        country={item.country}
                        director={item.director}
                        year={item.year}
                        description={item.description}
                        onSave={props.onSave}
                        onDelete={props.onDelete}
                        clicked={props.moviesSavedCards.some((i) =>
                        i.movieId === item.id
                        )}
                    />
                ))}
            </ul>
        </section>
    )
}

export default MoviesCardList;
