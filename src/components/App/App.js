import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js"
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Footer from "../Footer/Footer.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import Main from "../Main/Main.js";
import Login from "../Login/Login";


function App() {

    return (
        <div className="app">
            <Header/>
            <Switch>

                <Route exact path="/">
                    <Main/>
                </Route>

                <Route path="/movies">
                    <Movies/>
                </Route>

                <Route path="/saved-movies">
                    <SavedMovies/>
                </Route>

                <Route path="/profile">
                    <Profile/>
                </Route>

                <Route path="/signin">
                    <Login/>
                </Route>

                <Route path="/signup">
                    <Register/>
                </Route>

                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>

            <Footer/>

        </div>
    );
}

export default App;
