import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import '../../../common.css';
import './searchForm.css'
import {GrayColor} from "../../../utils/Constants.js";
import {useLocation} from "react-router-dom";


export default function SearchForm(props) {
    const location = useLocation()
    const onSubmit = props.onSubmit;
    const errors = props.errors;
    const values = props.values;
    const isValid = props.isvalid
    const qt = location.pathname === '/movies'

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <section className="search">
            <form className="search__form" id={qt ? 'searchForm' : 'saveSearchForm'}
                  onSubmit={handleSubmit} isValid={props.isValid} noValidate>
                <input className="search__input"
                       placeholder="Фильм"
                       name={qt ? 'search' : 'saveSearch'}
                       required
                       minLength={1}
                       type="text"
                       onChange={props.onChange}
                       id={qt ? 'search-movies' : 'save-search-movies'}
                       value={qt ? values.search : values.saveSearch}
                />
                {/*{errors.saveSearch || errors.search && <span*/}
                {/*    className="search__error">{location.pathname === '/movies' ? errors.search : errors.saveSearch}</span>}*/}
                <button className="search__button" type="submit"
                        disabled={qt ? !isValid.searchForm : !isValid.saveSearchForm}>Найти
                </button>
            </form>
            <FilterCheckbox onShortCheck={props.onShortCheck} checked={props.checked}/>
            <hr className="line search__line" color={GrayColor} size="1"/>
        </section>
    )
};
