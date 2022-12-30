const numberOfFilms = +prompt("How many films have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("Enter the title of one of the last movies you watched?", ""),
    filmRating = +prompt("How do you rate the film?", ""),
    lastFilmSecondTime = prompt("Enter the title of one of the last movies you watched?", ""),
    filmRatingSecondTime = +prompt("How do you rate the film?", "");

personalMovieDB.movies[lastFilm] = filmRating;
personalMovieDB.movies[lastFilmSecondTime] = filmRatingSecondTime;

console.log(personalMovieDB);