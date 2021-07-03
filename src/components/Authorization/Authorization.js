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
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err.message));
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
            return response.json();
        })
        .then(({token}) => {
            if (token) {
                localStorage.setItem("token", token);
                return token;
            }
        })
        .catch((err) => console.log(err));
};
