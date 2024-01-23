// DOM document Object model  ----> DOM manuplation

// selecting with id

let heading = document.getElementById("intro");
console.dir(heading);

// selecting with class

let class_ID = document.getElementsByClassName("lecture");
console.dir(class_ID);

// selecting with para

let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);

// by using query selector we can all methord mention below 

// only first tag in query selector
let element = document.querySelector("p");
console.dir(element);

// get node list of all availabe tags
let element1 = document.querySelectorAll("p");
console.dir(element1);

let other = document.querySelector("#intro");// because id shoud be written in form of #
console.dir(other);

let byclass = document.querySelectorAll(".lecture");
console.dir(byclass);