import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
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
import {checkLocalStorage, getFromLocalStorage, setLocalStorage} from "../../utils/ExtraFunctions.js";

function App() {
    const beatMoviesKey = 'beat-movies'
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [localMoviesCards, setLocalMoviesCards] = useState([]); // локальные фильмы
    const [foundMovies, setFoundMovies] = useState([]); // найденные фильмы
    const [moviesSavedCards, setMoviesSavedCards] = useState([]); // сохраненные фильмы
    const [inputValue, setInputValue] = useState({});
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        handleTokenCheck();
        if (!checkLocalStorage(beatMoviesKey)) {
            moviesApi.getMovies().then(data =>
                setLocalStorage(beatMoviesKey, data))
        }
        // history.push(location);
    }, [loggedIn]);


    // при загрузке страницы вызываю метод поиска фильмов и помещаю результат в локальное хранилище,
    // оттуда помещаю результат в стейт-переменную
    // наполняю массив с карточками из переменной с локальными данными карточек
    // при перезагрузке страницы данные остаются на месте
    // useEffect(() => {
    //     moviesApi.getMovies().then((data) => {
    //         localStorage.setItem('beat-movies', JSON.stringify(data))
    //         localStorage.setItem("searchedMovies", JSON.stringify(data));
    //         const storageMovies = JSON.parse(localStorage.getItem("searchedMovies"));
    //         setLocalMoviesCards([...storageMovies]);
    //     }).catch((err) => console.log(err));
    // }, [])

    // рендер фильтрованных фильмов
    useEffect(() => {
        const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        if (filteredMovies) {
            setFoundMovies(filteredMovies);
        } else {
            setFoundMovies([]);
        }
    }, []);

    // рендер сохраненных фильмов из локального хранилища
    useEffect(() => {
        getSavedMovies();
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

    // сохранение фильмов
    function handleMovieSaving(movie) {
        const clicked = moviesSavedCards.some((i) => i.movieId === movie.id);
        if (!clicked) {
            mainApi.saveMovie(movie).then((item) => {
                console.log(item)
                console.log(getFromLocalStorage('savedMovies'))
            }).then(() => getSavedMovies()).catch((err) => console.log(err));
        } else {
            moviesSavedCards.some((i) =>
                i.movieId === movie.id
                    ? mainApi
                        .deleteUsersMovie(i._id)
                        .then(() => {
                            getSavedMovies();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                    : ''
            );
        }
    }

    // удаление фильма из сохраненных
    function handleMovieDelete(movie) {
        mainApi
            .deleteUsersMovie(movie._id)
            .then(() => {
                setMoviesSavedCards((state) =>
                    state.filter((i) => (i._id === movie._id ? '' : i))
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getSavedMovies() {
        mainApi.getUsersSavedMovies().then((res) => {
            console.log(res);
            localStorage.setItem("savedMovies", JSON.stringify(res));
            const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
            setMoviesSavedCards(savedMovies);
        }).catch((err) => console.log(err))
    }

// контроль содержимого инпута поиска
    const handleChangeInputValue = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setInputValue({...inputValue, [name]: value});
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
                    // history.push("/movies");
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
        localStorage.removeItem(beatMoviesKey)
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
                                    onSaveCard={handleMovieSaving}
                                    moviesSavedCards={moviesSavedCards}

                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        moviesSavedCards={moviesSavedCards}
                        onDelete={handleMovieDelete}
                    />
                    <ProtectedRoute
                        path="/profile"
                        component={Profile}
                        onDataChange={handleUserDataChange}
                        onLogout={handleLogout}
                    />
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
