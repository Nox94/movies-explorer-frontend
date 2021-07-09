import React from 'react';
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies(props) {
    // console.log(props);
    const handleSearch = props.onSearch;
    const moviesCards = props.moviesCards;
    return (
        <>
            <SearchForm onSubmit={handleSearch}/>
            <MoviesCardList moviesCards={moviesCards}/>
        </>
    );
}

export default Movies;
