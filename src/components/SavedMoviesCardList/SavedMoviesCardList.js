import '../../common.css';
import MoviesCard from "../Movies/MoviesCard/MoviesCard.js";


function SavedMoviesCardList(props) {
    const savedMovies = props.savedMovies;
    // console.log(savedMovies); // приходят все сохраненные карточки

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
                    />
                ))}
            </ul>
        </section>
    )
}

export default SavedMoviesCardList;
