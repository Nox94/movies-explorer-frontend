const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://nox-movies-explorer.nomoredomains.icu/'
        : 'http://localhost:3000';

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
