import '../../common.css';
import './savedMovies.css'
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList.js';
import {useEffect} from "react";

function SavedMovies(props) {
    useEffect(() => {
            return props.reset()
        }, []
    )
    return (
        <>
            <SearchForm isvalid={props.isValid} onShortCheck={props.onShortCheck} checked={props.checked}
                        onSubmit={props.onSearch} onChange={props.onChangeInput} values={props.values}
                        errors={props.errors}/>
            <SavedMoviesCardList
                onDelete={props.onDelete}
                moviesSavedCards={props.moviesSavedCards}
                preloader={props.preloader}
            />
        </>
    );
}

function Ass() {
    return <></>
}

export default SavedMovies;
