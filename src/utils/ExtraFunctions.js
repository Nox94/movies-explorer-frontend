export function checkLocalStorage(key) {
    return !!localStorage.getItem(key)
}

export function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function setLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

export function initialValuesFromLS(key, initValues) {
    return checkLocalStorage(key) ? getFromLocalStorage(key) : initValues
}
