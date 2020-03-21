import API_TOKEN from '../Helpers/token'

export function getFilmsApiText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getImageApi(poster_path) {
    if (poster_path != null) {
        return ("https://image.tmdb.org/t/p/w300/" + poster_path)
    } else {
        return ('https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png')
    }
}