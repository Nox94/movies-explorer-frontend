import {BaseUrl, HandleOriginalResponse, Headers, Token} from "./Constants.js";

export const register = (name, email, password) => {
    return fetch(`${BaseUrl}/signup`, {
        method: "POST",
        headers: Headers,
        body: JSON.stringify({name, email, password}),
    })
        .then(HandleOriginalResponse)
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
    return fetch(`${BaseUrl}/signin`, {
        method: "POST",
        headers: Headers,
        body: JSON.stringify({email, password}),
    })
        .then(HandleOriginalResponse)
        .then(({token}) => {
            if (token) {
                localStorage.setItem("token", token);
                return token;
            }
        })
        .catch((err) => console.log(err));
};

export const getUsersInfo = (token) => {
    return fetch(`${BaseUrl}/users/me`, {
        method: "GET",
        headers: {...Headers, Authorization: `Bearer ${token}`},
    })
        .then(HandleOriginalResponse)
        .catch((err) => console.log(err));
};

export const changeUserInfo = (name, email) => {
    return fetch(`${BaseUrl}/users/me`, {
        method: "PATCH",
        headers: {...Headers, Authorization: `Bearer ${Token}`},
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    }).then(HandleOriginalResponse).catch((err) => console.log(err));
}

export const saveMovie = (movie) => {
    return fetch(`${BaseUrl}/movies/`, {
        method: "POST",
        headers: {...Headers, Authorization: `Bearer ${Token}`},
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            trailer: movie.trailer,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            thumbnail: movie.thumbnail,
            movieId: movie.movieId,
        })
    }).then(HandleOriginalResponse).catch((err) => console.log(err));
}
