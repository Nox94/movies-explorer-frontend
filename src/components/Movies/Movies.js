import React, {useState} from 'react';
import './movies.css';
import '../../common.css';
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import useWindowSize from "../../hooks/useWindowSize.js";

function Movies(props) {
    const [plusCards, setPlusCards] = useState(3);
    const {width} = useWindowSize();
    const showMoreMovies = () => {
        (width >= 1000) && setPlusCards((prevValue) => prevValue + 3);
        (width <= 999) && setPlusCards((prevValue) => prevValue + 2);
    }
    return (
        <>
            <SearchForm onSubmit={props.onSearch} onChange={props.onChangeInput} onShortCheck={props.onShortCheck}
                        isvalid={props.isValid} errors={props.errors} values={props.values} checked={props.checked}/>
            <MoviesCardList
                moviesCards={props.foundMovies.slice(0, plusCards)}
                onSave={props.onSaveCard}
                onDelete={props.onDelete}
                clicked={props.clicked}
                preloader={props.preloader}
            />
            <button className={plusCards >= props.foundMovies.length ? "hidden" : "movies__more-button"}
                    type="button"
                    onClick={showMoreMovies}>
                Еще
            </button>
        </>
    );
}
function  Ass(){
    return <></>
}

export default Movies;
