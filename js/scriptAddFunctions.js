"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films have you already watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    //numberOfFilms == null - user clicked cancel
    numberOfFilms = +prompt(
      "Again How many films have you already watched?",
      ""
    );
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt(
      "Enter the title of one of the last movies you watched?",
      ""
    );
    let b = +prompt("How do you rate the film?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function writeYoutGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Your favourite genre #${i}`, "");
    if (genre != null && genre != "") {
      personalMovieDB.genres[i - 1] = genre;
    } else {
      i--;
    }
  }
}

writeYoutGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Watched quite a few films");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a classic spectator");
  } else if (personalMovieDB.count > 30) {
    alert("You are a cinephile");
  } else {
    alert("Error");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);
