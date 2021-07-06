import '../../common.css';
import './savedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function SavedMovies(props) {
    return (
        <>
            <SearchForm/>
            <MoviesCardList/>
        </>
    );
}

export default SavedMovies;
