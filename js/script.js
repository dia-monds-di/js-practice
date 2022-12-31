"use strict";

const numberOfFilms = +prompt("How many films have you already watched?", "");
let lastFilm;
let filmRating;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  lastFilm = prompt(
    "Enter the title of one of the last movies you watched?",
    ""
  );
  while (!lastFilm || lastFilm.length > 50) {
    lastFilm = prompt(
      "AGAIN Enter the title of one of the last movies you watched?",
      ""
    );
  }
  filmRating = +prompt("How do you rate the film?", "");
  personalMovieDB.movies[lastFilm] = filmRating;

  //  second option (instead of while)
  // if (lastFilm != null && filmRating != null && lastFilm != '' && filmRating != '' && lastFilm.length < 50) {
  //   personalMovieDB.movies[lastFilm] = filmRating;
  // } else {
  //   i--;
  // }
}

if (personalMovieDB.count < 10) {
  alert("Watched quite a few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("You are a classic spectator");
} else if (personalMovieDB.count > 30) {
  alert("You are a cinephile");
} else {
  alert("Error");
}

console.log(personalMovieDB);
