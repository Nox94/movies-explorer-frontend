import '../../../common.css';
import './moviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";

function MoviesCardList() {
    return (
        <section className="movies__container">
            <ul className="movies__card-list">
                <MoviesCard/>
            </ul>
            <Route path="/movies">
                <button className="movies__more-button">Еще</button>
            </Route>
        </section>
    )
}

export default MoviesCardList;
