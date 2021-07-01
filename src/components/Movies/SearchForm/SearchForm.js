import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import '../../../common.css';
import './searchForm.css'

const grayColor = "#EDEDED";

export default function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <input className="search__input" placeholder="Фильм" required={'true'} type={'text'}/>
                <button className="search__button">Найти</button>
            </form>
            <FilterCheckbox/>
            <hr className="line search__line" color={grayColor} size="1"/>
        </section>
    )
};
