const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://nox-movies-explorer.nomoredomains.icu/'
        : 'http://localhost:3002';

export const register = (name, email, password) => {
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
    })
        .then((response) => {
            if (response.status === 409) {
                return Promise.reject(new Error("Пользователь с таким email уже существует."))
            } else if (response.status === 404) {
                return Promise.reject(new Error("Введены некорректные данные."))
            } else {
                return response.json();
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const login = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    })
        .then((response) => {
            if (response.status === 404) {
                return Promise.reject(new Error("Введены некорректные данные."))
            } else {
                return response.json();
            }
        })
        .then(({token}) => {
            if (token) {
                localStorage.setItem("token", token);
                return token;
            }
        })
        .catch((err) => console.log(err));
};

//{"_id":"60df541fa53d86413021796c",
// "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRmNTQxZmE1M2Q4NjQxMzAyMTc5NmMiLCJpYXQiOjE2MjU0OTAwMDksImV4cCI6MTYyNjA5NDgwOX0.e6rGfh6Tcu8DmWJVdyeMH9hmfRuQ6fMLkjydk4Xa8os"}
