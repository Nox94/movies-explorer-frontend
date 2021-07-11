import React, {useState} from 'react';
import './movies.css';
import '../../common.css';
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import useWindowSize from "../../hooks/useWindowSize.js";

function Movies(props) {
    const moviesCards = props.moviesCards;
    const handleSearch = props.onSearch;
    const [plusCards, setPlusCards] = useState(3);
    const {width} = useWindowSize();
    const showMoreMovies = () => {
        (width >= 1000) && setPlusCards((prevValue) => prevValue + 3);
        (width <= 999) && setPlusCards((prevValue) => prevValue + 2);
    }
    return (
        <>
            <SearchForm onSubmit={handleSearch} onChange={props.onChangeInput}/>
            <MoviesCardList
                moviesCards={moviesCards.slice(0, plusCards)}
                onSave={props.onSaveCard}
                moviesSavedCards={props.moviesSavedCards}
            />
            <button className={plusCards >= moviesCards.length ? "hidden" : "movies__more-button"}
                    type="button"
                    onClick={showMoreMovies}>
                Еще
            </button>
        </>
    );
}

export default Movies;
