import '../../common.css';
import MoviesCard from "../Movies/MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";

function SavedMoviesCardList(props) {
    return (
        <section className="movies__container">
            <ul className="movies__card-list">
                {props.preloader && <Preloader/>}
                {props.moviesSavedCards.map((item) => (
                    <MoviesCard
                        movie={item}
                        key={item._id}
                        // movieId={item.id}
                        // nameRU={item.nameRU}
                        // nameEN={item.nameEN}
                        // image={item.image}
                        // thumbnail={item.image}
                        // trailer={item.trailer}
                        // duration={item.duration}
                        // country={item.country}
                        // director={item.director}
                        // year={item.year}
                        // description={item.description}
                        onDelete={props.onDelete}
                    />
                ))}
            </ul>
        </section>
    )
}

export default SavedMoviesCardList;
