import '../../common.css';
import './savedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList.js';

function SavedMovies(props) {
    const savedMovies = props.moviesSavedCards;

    return (
        <>
            <SearchForm/>
            <SavedMoviesCardList savedMovies={savedMovies}/>
        </>
    );
}

export default SavedMovies;
