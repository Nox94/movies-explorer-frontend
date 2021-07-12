import {BaseUrl, HandleOriginalResponse, Headers, Token} from "./Constants.js";

// регистрация
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
// вход
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
// получение инфы п-ля
export const getUsersInfo = (token) => {
    console.log('getUsersInfo')
    return fetch(`${BaseUrl}/users/me`, {
        method: "GET",
        headers: {...Headers, Authorization: `Bearer ${token}`},
    })
        .then(HandleOriginalResponse)
        .catch((err) => console.log(err));
};
// смена инфы п-ля
export const changeUserInfo = (name, email) => {
    return fetch(`${BaseUrl}/users/me`, {
        method: "PATCH",
        headers: {...Headers, credential: 'include', Authorization: `Bearer ${Token}`},
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    }).then(HandleOriginalResponse).catch((err) => console.log(err));
}
// сохранение фильма в свою БД
// запрос на createMovie к своему серверу, он ждет объъект с полями фильма
export const saveMovie = (movie) => { // сюда должен приходить объект фильма
    /* console.log('save', {country,
         director,
         duration,
         year,
         description,
         image,
         trailer,
         thumbnail,
         nameRU,
         nameEN,
         movieId}); // вывод в консоль того, что сохраняем*/
    delete movie.id
    delete movie.owner
    delete movie._id
    return fetch(`${BaseUrl}/movies/`, {
        method: "POST",
        headers: {...Headers, Authorization: `Bearer ${Token}`},
        body: JSON.stringify(movie)
    }).then(HandleOriginalResponse).catch((err) => console.log(err));
}
// получаем из нашей БД все сохраненные фильмы п-ля для рендера
export const getUsersSavedMovies = () => {
    console.log('getUsersSavedMovies')
    return fetch(`${BaseUrl}/movies/`, {
        method: "GET",
        headers: {...Headers, Authorization: `Bearer ${Token}`}, // добавила тут токен
    })
        .then(HandleOriginalResponse)
        .then((res) => {
            // console.log(res);
            return res; // возвращает объект ответа, все сохраненные карточки
        })
        .catch((err) => console.log(err));
};

export const deleteUsersMovie = (id) => {
    return fetch(`${BaseUrl}/movies/${id}`, {
        method: 'DELETE',
        headers: {...Headers, Authorization: `Bearer ${Token}`},
    })
        .then(HandleOriginalResponse)
        .catch((err) => console.log(err));
};
