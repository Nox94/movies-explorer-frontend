import {HandleOriginalResponse, BeatFilmUrl} from "./Constants.js";
export function getMoviesOnSearch () {
    return fetch(`${BeatFilmUrl}`, {
    }).then(HandleOriginalResponse).catch((err) => console.log(err))
}
