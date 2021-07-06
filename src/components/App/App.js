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
        // console.log(token);
        if (token) {
            auth.getUsersInfo(token).then((res) => {
                // console.log(res); //объект пользователя
                if (res) {
                    setLoggedIn(true);
                    setCurrentUser(res);
                    history.push("/movies");
                }
            });
        }
    }

    return (

            <CurrentUserContext.Provider value={currentUser}>
                <LoggedInContext.Provider value={{loggedIn}}>

                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>

                        <ProtectedRoute path="/movies" component={Movies} />

                        <ProtectedRoute path="/saved-movies" component={SavedMovies} />

                        <ProtectedRoute path="/profile" component={Profile} />

                        <Route path="/signin">
                            <Login
                                onLogin={handleLogin}
                            />
                        </Route>
                        <Route path="/signup">
                            <Register/>
                        </Route>
                        <Route path="*">
                            <PageNotFound/>
                        </Route>
                    </Switch>
                    <Footer/>
                </LoggedInContext.Provider>
            </CurrentUserContext.Provider>
    );
}

export default App;
