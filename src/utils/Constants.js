export const HeaderWhite = {
    backgroundColor: '#fff'
}

export const HeaderPlum = {
    backgroundColor: '#42346B'
}

export const Violet = {
    color: "#5934EE"
}

export const WhiteColor = {
    color: "#fff"
}

export const BlackColor = {
    color: "#000"
}

export const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://nox-movies-explorer.nomoredomains.icu/'
        : 'http://localhost:3002';

export const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const token = localStorage.getItem("token");

export const handleOriginalResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
};
