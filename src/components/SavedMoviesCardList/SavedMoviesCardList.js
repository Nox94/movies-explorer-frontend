import '../../common.css';
import MoviesCard from "../Movies/MoviesCard/MoviesCard.js";


function SavedMoviesCardList(props) {
    const savedMovies = props.savedMovies;
    const onDelete = props.onDelete;
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
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </section>
    )
}

export default SavedMoviesCardList;
