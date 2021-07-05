import React, {useState} from 'react';
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";


function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogin() {
        setLoggedIn(true);
    }

    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>

                <ProtectedRoute path="/movies" component={Movies} loggedIn={loggedIn}/>

                <ProtectedRoute path="/saved-movies" component={SavedMovies} loggedIn={loggedIn}/>

                <ProtectedRoute path="/profile" component={Profile} loggedIn={loggedIn}/>

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
        </div>
    );
}

export default App;
