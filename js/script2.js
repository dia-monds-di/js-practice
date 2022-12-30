"use strict";

const num = 50;

if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Many");
} else {
  console.log("Ok");
}

num === 50 ? console.log("Ok") : console.log("Error");

switch (num) {
  case 49:
    console.log("Error");
    break;
  case 50:
    console.log("Ok!!!");
    break;
  default:
    console.log("Try again please");
    break;
}