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
    color: "#fff",
    border: "none"
}

export const BlackColor = {
    color: "#000",
    border: "none"
}

export const GrayColor = "#EDEDED";

export const BeatFilmUrl = "https://api.nomoreparties.co/beatfilm-movies";

export const BaseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://api.nox-movies-explorer.nomoredomains.icu'
        : 'http://192.168.1.178:3002';

export const Headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const Token = localStorage.getItem("token");

export const HandleOriginalResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
};
