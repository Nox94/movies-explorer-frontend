import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import '../../../common.css';
import './searchForm.css'
import {GrayColor} from "../../../utils/Constants.js";


export default function SearchForm(props) {
    const onSubmit = props.onSubmit;

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <input className="search__input" placeholder="Фильм"/>
                <button className="search__button" type="submit">Найти</button>
            </form>
            <FilterCheckbox/>
            <hr className="line search__line" color={GrayColor} size="1"/>
        </section>
    )
};
