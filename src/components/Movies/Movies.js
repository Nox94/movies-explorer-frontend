import React from 'react';
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies(props) {
    return (
        <>
            <SearchForm/>
            <MoviesCardList/>
        </>
    );
}

export default Movies;
