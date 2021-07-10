import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Switch, useHistory} from "react-router-dom";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js"
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Footer from "../Footer/Footer.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import Main from "../Main/Main.js";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import * as mainApi from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi.js';
import {CurrentUserContext, LoggedInContext} from "../../contexts/contexts.js";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [localMoviesCards, setLocalMoviesCards] = useState([]); // локальные фильмы
    const [foundMovies, setFoundMovies] = useState([]); // найденные фильмы
    const [moviesSavedCards, setMoviesSavedCards] = useState([]); // сохраненные фильмы
    const [inputValue, setInputValue] = useState({});

    const history = useHistory();

    useEffect(() => {
        handleTokenCheck();
    }, [loggedIn]);


    // при загрузке страницы вызываю метод поиска фильмов и помещаю результат в локальное хранилище,
    // оттуда помещаю результат в стейт-переменную
    // наполняю массив с карточками из переменной с локальными данными карточек
    // при перезагрузке страницы данные остаются на месте
    useEffect(() => {
        moviesApi.getMovies().then((data) => {
            localStorage.setItem("searchedMovies", JSON.stringify(data));
            const storageMovies = JSON.parse(localStorage.getItem("searchedMovies"));
            setLocalMoviesCards([...storageMovies]);
        }).catch((err) => console.log(err));
    }, [])

     // рендер фильтрованных фильмов
     useEffect(() => {
         const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
         if (filteredMovies) {
             setFoundMovies(filteredMovies);
         } else {
             setFoundMovies([]);
         }
     }, []);

    // поиск фильмов
    function handleMoviesSearch() {
        setTimeout(() => {
            const filteredMovies = localMoviesCards.filter((item) => {
                const search = inputValue.search.toLowerCase();
                const nameRU = item.nameRU.toLowerCase();
                const nameEN = item.nameEN;
                return (nameEN && true && nameEN.toLowerCase().includes(search)) || (nameRU && true && nameRU.toLowerCase().includes(search))
                    ? item
                    : console.log('Нет фильмов по запросу.');
            });
            localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
            setFoundMovies(filteredMovies);
        }, 1000)
    }


    function handleMovieSaving(movie) {
        mainApi.saveMovie(movie).then((movieCard) => {
            setMoviesSavedCards([...movieCard]);
        }).catch((err) => console.log(err))
    }

    // контроль содержимого инпута поиска
    const handleChangeInputValue = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setInputValue({ ...inputValue, [name]: value });
        // setErrors({ ...errors, [name]: target.validationMessage });
        // setIsValid(target.closest('form').checkValidity());
    };

    // регистрация
    function handleRegisterSubmit({name, email, password}) {
        mainApi.register(name, email, password).then((res) => {
            if (res) {
                history.push('/signin')
            }
        }).catch((e) => console.log(e));
    }

    // вход
    function handleLoginSubmit({email, password}) {
        mainApi.authorize(email, password).then((res) => {
            if (res) { //токен
                setLoggedIn(true);
                history.push('/movies');
            }
        }).catch((e) => console.log(e));
    }

    // проверка токена
    function handleTokenCheck() {
        const token = localStorage.getItem("token");
        if (token) {
            mainApi.getUsersInfo(token).then((res) => {
                if (res) { //объект пользователя
                    setLoggedIn(true);
                    setCurrentUser(res);
                    history.push("/movies");
                }
            }).catch((e) => console.log(e));
        }
    }
    // смена данных п-ля
    function handleUserDataChange(name, email) {
        mainApi.changeUserInfo(name, email)
            .then((res) => setCurrentUser(res))
            .catch((err) => console.log(err))
    }

    // выход
    function handleLogout() {
        localStorage.removeItem("token");
        setCurrentUser({});
        setLoggedIn(false);
    }



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <LoggedInContext.Provider value={{loggedIn}}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <ProtectedRoute path="/movies"
                                    component={Movies}
                                    onSearch={handleMoviesSearch}
                                    moviesCards={foundMovies}
                                    onChangeInput={handleChangeInputValue}
                    />
                    <ProtectedRoute path="/saved-movies" component={SavedMovies}/>
                    <ProtectedRoute path="/profile" component={Profile} onDataChange={handleUserDataChange}
                                    onLogout={handleLogout}/>
                    <Route path="/signin" render={() => <Login onLogin={handleLoginSubmit}/>}/>
                    <Route path="/signup" render={() => <Register onRegister={handleRegisterSubmit}/>}/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
                <Footer/>
            </LoggedInContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
