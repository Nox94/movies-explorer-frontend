import '../../../common.css';
import './moviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="movies__container">
            <ul className="movies__card-list">
                {props.moviesCards.map((item) => (
                    <MoviesCard
                        movie={item}
                        key={item.id}
                        movieId={item.id}
                        nameRU={item.nameRU}
                        nameEN={item.nameEN}
                        image={"https://api.nomoreparties.co"+item.image.url}
                        thumbnail={"https://api.nomoreparties.co"+item.image.url}
                        trailer={item.trailerLink}
                        duration={item.duration}
                        country={item.country}
                        director={item.director}
                        year={item.year}
                        description={item.description}
                    />
                ))}
            </ul>
        </section>
    )
}

export default MoviesCardList;
