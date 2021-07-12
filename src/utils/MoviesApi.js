import {HandleOriginalResponse, BeatFilmUrl} from "./Constants.js";
export function getMovies () {
    return fetch(`${BeatFilmUrl}`, {
    }).then(HandleOriginalResponse).catch((err) => console.log(err))
}
