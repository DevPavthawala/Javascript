// problem 1

// creating button using J S

let button = document.createElement("button");
button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";

// inserting in web page

document.querySelector("body").prepend(button);



// problem 2

let para = document.querySelector("p");
let value = para.getAttribute("class");
console.log(value);

// para.setAttribute("class","newclass"); // this will overwrite and remove the perivous class

// so to keep previous and new class in single element

para.classList.add("newclass");

// to remove some class we can use 

para.classList.remove("content")