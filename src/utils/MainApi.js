import {baseUrl} from "./Constants.js";

const token = localStorage.getItem("token");
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
const handleOriginalResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
};

export const changeUserInfo = (name, email) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {...headers, Authorization: `Bearer ${token}`},
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    }).then(handleOriginalResponse);
}
