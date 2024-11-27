/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let whoElement = randomElement(who);
  let actionElement = randomElement(action);
  let whatElement = randomElement(what);
  let whenElement = randomElement(when);

  const newExcuse =
    whoElement + " " + actionElement + " " + whatElement + " " + whenElement;

  document.getElementById("excusa").innerText = newExcuse;
};

function randomElement(array) {
  let newIndex = Math.floor(Math.random() * array.length);
  return array[newIndex];
}
