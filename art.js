"use strict";

// MODEL
let array = [];
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 33);
}

init();
function init() {
  console.log("let the party begin");
  loop();
}
function loop() {
  populateArray();
  restartHTML();
  createBars();
  removeOld();
  setTimeout(loop, 1000);
  console.log(array.length);
}

function populateArray() {
  let queueSize = getNumberOfCustomers();
  array.unshift(queueSize);
  console.log(queueSize);
}

function createBars() {
  for (let i = array.length; i >= 0; i--) {
    const template = document.createElement("div");
    const copy = template.cloneNode(true);
    copy.classList.add("bar");
    copy.classList.add("movement");
    // copy.classList.add("fadeIn");
    copy.style.height = array[i] * 10 + "px";
    copy.style.filter = `grayscale(${i * 4 - 20}%)`;

    // for(let i = array.length; i>=; i-- ){
    //   copy.style.filter = `grayscale(${array.length * 2.5}%)`;
    // }
    console.log(array[i]);
    // colors
    if (array[i] > 20) {
      copy.style.backgroundColor = "red";
    } else if (array[i] <= 20 && array[i] >= 10) {
      copy.style.backgroundColor = "yellow";
    } else if (array[i] < 10) {
      copy.style.backgroundColor = "green";
    }
    // show peeps
    copy.addEventListener("mouseover", showPeople);
    function showPeople() {
      document.querySelector("h1").textContent =
        "the number of customers is " + array[i];
    }
    // grab parent
    const parent = document.querySelector("#bar_chart");
    // append
    parent.prepend(copy);
  }
}

// CONTROLLER
function removeOld() {
  if (array.length > 40) {
    array.pop(41);
  }
  console.log(array);
}
function restartHTML() {
  document.querySelector("#bar_chart").innerHTML = "";
  console.log("cleaned");
}
