"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt("How many films have you already watched?", "");
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      //numberOfFilms == null - user clicked cancel
      personalMovieDB.count = +prompt(
        "Again How many films have you already watched?",
        ""
      );
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt(
        "Enter the title of one of the last movies you watched?",
        ""
      ).trim();
      let b = +prompt("How do you rate the film?", "").trim();
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert("Watched quite a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("You are a classic spectator");
    } else if (personalMovieDB.count > 30) {
      alert("You are a cinephile");
    } else {
      alert("Error");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYoutGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favourite genre #${i}`, "").trim();
      if (genre == '' || genre === null) {
        console.log("Invalid data or empty");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre #${i + 1} - ${item}`);
    });
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};
