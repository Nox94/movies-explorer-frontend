import {baseUrl, handleOriginalResponse, headers, token} from "./Constants.js";

export const register = (name, email, password) => {
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({name, email, password}),
    })
        .then(handleOriginalResponse)
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({email, password}),
    })
        .then(handleOriginalResponse)
        .then(({token}) => {
            if (token) {
                localStorage.setItem("token", token);
                return token;
            }
        })
        .catch((err) => console.log(err));
};

export const getUsersInfo = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {...headers, Authorization: `Bearer ${token}`},
    })
        .then(handleOriginalResponse)
        .catch((err) => console.log(err));
};

export const changeUserInfo = (name, email) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {...headers, Authorization: `Bearer ${token}`},
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    }).then(handleOriginalResponse).catch((err) => console.log(err));
}
