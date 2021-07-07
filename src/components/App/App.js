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
import * as auth from '../Authorization/Authorization.js';
import * as mainApi from '../../utils/MainApi.js';
import {CurrentUserContext, LoggedInContext} from "../../contexts/contexts.js";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        handleTokenCheck();
        // if (loggedIn) {
        //
        //     // api
        //     //     .getTheCards()
        //     //     .then((result) => {
        //     //         setCards(result);
        //     //     })
        //     //     .catch((err) => console.log(err));
        // }
    }, [loggedIn]);

    function handleLogin() {
        setLoggedIn(true);
    }

    function handleTokenCheck() {
        const token = localStorage.getItem("token");
        if (token) {
            auth.getUsersInfo(token).then((res) => {
                if (res) {//объект пользователя
                    setLoggedIn(true);
                    setCurrentUser(res);
                    history.push("/movies");
                }
            });
        }
    }

    function handleUserDataChanging(name, email) {
        mainApi.changeUserInfo(name, email)
            .then((res) => setCurrentUser(res))
            .catch((err) => console.log(err))
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <LoggedInContext.Provider value={{loggedIn}}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <ProtectedRoute path="/movies" component={Movies}/>
                    <ProtectedRoute path="/saved-movies" component={SavedMovies}/>
                    <ProtectedRoute path="/profile" component={Profile} onDataChange={handleUserDataChanging}/>
                    <Route path="/signin" component={Login} onLogin={handleLogin}/>
                    <Route path="/signup" component={Register}/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
                <Footer/>
            </LoggedInContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
