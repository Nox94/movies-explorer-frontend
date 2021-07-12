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
import {
    checkLocalStorage,
    getFromLocalStorage,
    initialValuesFromLS,
    setLocalStorage
} from "../../utils/ExtraFunctions.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.js";

function App() {
    const beatMoviesKey = 'beat-movies'
    const foundMoviesKey = 'filteredMovies'
    const searchWord = 'search-word'
    const savedMoviesKey = 'savedMovies'
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [localMoviesCards, setLocalMoviesCards] = useState(initialValuesFromLS(beatMoviesKey, [])); // локальные фильмы
    const [foundMovies, setFoundMovies] = useState(initialValuesFromLS(foundMoviesKey, []));
    // найденные фильмы
    const [moviesSavedCards, setMoviesSavedCards] = useState([]); // сохраненные фильмы
    const [values, setValues] = useState({
        search: initialValuesFromLS(searchWord, ''),
        saveSearch: '',
        signinEmail: '',
        signupEmail: '',
        signupName: '',
        signupPassword: '',
        signinPassword: '',
        profileName: '',
        profileEmail: '',
    });
    const [toolTipStatus, setToolTipStatus] = useState("fail"); //начальное сообщение попапа
    const [toolTipMessage, setToolTipMessage] = useState('')
    const [toolTipOpen, setToolTipOpen] = useState(false); // управление отображением попапа
    const [preloader, setPreloader] = useState(false);
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = useState({
        searchForm: false,
        saveSearchForm: false,
        profileForm: false,
        signinForm: false,
        signupForm: false
    });
    const history = useHistory();
    const [isShortFilm, setShortFilm] = useState(false)
    useEffect(() => {
        handleTokenCheck();
        init()
    }, [loggedIn]);

    useEffect(() => {
        init()
    }, [])

    function init() {
        const isToken = checkLocalStorage('token')
        console.log('Token is', isToken)
        const isBeatMovies = checkLocalStorage(beatMoviesKey)
        const foundMovies = checkLocalStorage(foundMoviesKey)
        if (isToken) {
            if (!isBeatMovies) {
                moviesApi.getMovies().then(data =>
                    setLocalStorage(beatMoviesKey, data))
            }
            // рендер сохраненных фильмов из локального хранилища
            getSavedMovies();
        }
    }

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

    // // рендер сохраненных фильмов из локального хранилища
    // useEffect(() => {
    //     getSavedMovies();
    // }, []);

    // получение сохраненных фильмов пользователя
    function getSavedMovies() {
        mainApi.getUsersSavedMovies().then((res) => {
            console.log('saved movies', res);
            setLocalStorage(savedMoviesKey, res)
            setMoviesSavedCards(res);
        }).catch((err) => console.log(err))
    }

    function checkClicked(movie) {
        //у проверяемого должен быть id
        return moviesSavedCards.length > 0 ? moviesSavedCards.some(i => i.movieId === movie.id) : false
    }

    // проверка токена
    function handleTokenCheck() {
        const isToken = checkLocalStorage('token')
        const token = isToken ? localStorage.getItem('token') : ''
        if (isToken) {
            mainApi.getUsersInfo(token).then((res) => {
                setLoggedIn(true);
                setCurrentUser(res);
            }).catch((e) => console.log(e));
        }
    }

    // поиск фильмов
    async function handleMoviesSearch() {
        if (isValid) {
            const delay = 1000

            function sleep(ms) {
                return new Promise((resolve) => setTimeout(resolve, ms));
            }

            setPreloader(true);
            console.log(localMoviesCards)
            // setPreloader(true); // прелоадер до получения результатов активен
            await sleep(delay)
            const filteredMovies = localMoviesCards.filter((item) => {
                const search = values.search.toLowerCase();
                const nameRU = item.nameRU === null ? 'null' : item.nameRU.toLowerCase();
                const nameEN = item.nameEN === null ? 'null' : item.nameEN.toLowerCase();
                return (nameEN && true && nameEN.includes(search)) || (nameRU && true && nameRU.includes(search))
                    ? item
                    : (setToolTipStatus("fail") && setToolTipOpen(true) && console.log('Нет фильмов по запросу.'));
            });
            setLocalStorage('filteredMovies', filteredMovies)
            setFoundMovies(filteredMovies);
            setLocalStorage('search-word', values.search)
            console.log('найдено', filteredMovies)
            // прелоадер после получения результатов неактивен
            setPreloader(false)
            if (filteredMovies.length === 0) {
                setToolTipMessage('Ничего не найдено')
                setToolTipOpen(true)
            }
        }
    }

    function handleSavedSearch() {
        const search = values.saveSearch.toLowerCase();
        const f = moviesSavedCards.filter((item) => {
            const nameRU = item.nameRU === null ? 'null' : item.nameRU.toLowerCase();
            const nameEN = item.nameEN === null ? 'null' : item.nameEN.toLowerCase();
            return (nameEN && true && nameEN.includes(search)) || (nameRU && true && nameRU.includes(search))
                ? item
                : (setToolTipStatus("fail") && setToolTipOpen(true) && console.log('Нет фильмов по запросу.'));
        })
        console.log('saved search', f)
        console.log('saved term', search)
        if (f.length > 0) {
            setMoviesSavedCards(f)
        } else if (f.length === 0) {
            setToolTipMessage('Ничего не найдено')
            setToolTipOpen(true)
        }
    }

    // сохранение фильмов
    function handleMovieSaving(movie) {
        //проверка кликнутости
        console.log(movie)

        //если не кликнуто, то отправим запрос на сохранение
        if (!checkClicked(movie)) {
            mainApi.saveMovie({...movie, movieId: movie.id}).then((item) => {
                console.log(item)
                console.log(getFromLocalStorage('savedMovies'))
                //изменить стейт + лс
            }).then(() => getSavedMovies()).catch((err) => {
                setToolTipOpen(true)
                console.log(err)
            });
        } else {
            //если кликнуто, то отправим запрос на удаление
            moviesSavedCards.some((i) =>
                i.movieId === movie.id
                    ? mainApi
                        .deleteUsersMovie(i._id)
                        .then(() => {
                            getSavedMovies();
                        })
                        .catch((err) => {
                            setToolTipOpen(true)
                            console.log(err);
                        })
                    : ''
            );
        }
        //нужно поменять стейт карточки?
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


// контроль содержимого инпута поиска
    const handleChangeInputValue = (e) => {
        const target = e.target;
        console.log(target.closest('form').id)
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid({...isValid, [target.closest('form').id]: target.closest('form').checkValidity()});
    };

// регистрация
    function handleRegisterSubmit() {
        const {signupName, signupEmail, signupPassword} = values
        mainApi.register(signupName, signupEmail, signupPassword).then((res) => {
            if (res) {
                setToolTipStatus("success"); // успешно зарегистрировались
                setToolTipOpen(true);
                history.push('/signin')
            } else if (!res.ok) {
                setToolTipStatus("fail"); // ошибка при попытке рег-ии
                setToolTipOpen(true);
            }
        })
            .catch((e) => {
                setToolTipStatus("fail"); // ошибка при попытке рег-ии
                setToolTipOpen(true);
                console.log(e);
            });
    }

// вход
    function handleLoginSubmit() {
        const {signinEmail, signinPassword} = values
        mainApi.authorize(signinEmail, signinPassword).then((res) => {
            if (res) { //токен
                setLoggedIn(true);
                history.push('/movies');
            } else if (!res) {
                setToolTipStatus("fail"); // ошибка при попытке войти
                setToolTipOpen(true);
            }
        }).catch((e) => {
            setToolTipStatus("fail"); // ошибка при попытке войти
            setToolTipOpen(true);
            console.log(e);
        });
    }


// смена данных п-ля
    function handleUserDataChange() {
        // const {name, email} = values
        const {profileName, profileEmail} = values
        mainApi.changeUserInfo(profileName, profileEmail)
            .then((res) => {
                setToolTipStatus("success"); // данные успешно изменены
                setToolTipOpen(true);
                setCurrentUser(res);
            })
            .catch((e) => {
                setToolTipStatus("fail"); // ошибка при обновлении данных
                setToolTipOpen(true);
                console.log(e);
            })
    }

    /*    // открытие попапа с сообщением
        function handlePopupOpening() {
            setToolTipOpen(true);
        }*/

    // закрытие попапа с сообщением
    function handlePopupClosing() {
        setToolTipOpen(false);
        setToolTipMessage('');
    }

// выход
    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem(beatMoviesKey)
        setCurrentUser({});
        setLoggedIn(false);
    }

    function handleShortFilm() {
        setShortFilm(!isShortFilm)
    }

    function resetSaved() {
        if (checkLocalStorage('savedMovies')) {
            const ls = getFromLocalStorage('savedMovies')
            setMoviesSavedCards(ls)
        }
    }

    const bmovies = () => isShortFilm ? foundMovies.filter(i => i.duration <= 40) : foundMovies
    const smovies = () => isShortFilm ? moviesSavedCards.filter(i => i.duration <= 40) : moviesSavedCards

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <LoggedInContext.Provider value={{loggedIn}}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <ProtectedRoute path="/movies"
                                    component={Movies}
                                    onSearch={handleMoviesSearch}
                                    foundMovies={bmovies()}
                                    onChangeInput={handleChangeInputValue}
                                    onSaveCard={handleMovieSaving}
                                    clicked={checkClicked}
                                    preloader={preloader}
                                    onShortCheck={handleShortFilm}
                                    checked={isShortFilm}
                                    isValid={isValid}
                                    errors={errors}
                                    values={values}
                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        moviesSavedCards={smovies()}
                        onDelete={handleMovieDelete}
                        preloader={preloader}
                        onShortCheck={handleShortFilm}
                        checked={isShortFilm}
                        onSearch={handleSavedSearch}
                        onChangeInput={handleChangeInputValue}
                        isValid={isValid}
                        errors={errors}
                        values={values}
                        reset={resetSaved}
                    />
                    <ProtectedRoute
                        path="/profile"
                        component={Profile}
                        onDataChange={handleUserDataChange}
                        onLogout={handleLogout}
                        onChangeInput={handleChangeInputValue}
                        isValid={isValid}
                        errors={errors}
                        values={values}
                    />
                    <Route path="/signin"
                           render={() => <Login onSubmit={handleLoginSubmit} values={values} isValid={isValid}
                                                errors={errors} onChangeInput={handleChangeInputValue}/>}/>
                    <Route path="/signup"
                           render={() => <Register onSubmit={handleRegisterSubmit} values={values} isValid={isValid}
                                                   errors={errors} onChangeInput={handleChangeInputValue}/>}/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
                <InfoTooltip
                    isOpen={toolTipOpen}
                    status={toolTipStatus}
                    onClose={handlePopupClosing}
                    message={toolTipMessage}
                />
                <Footer/>
            </LoggedInContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
