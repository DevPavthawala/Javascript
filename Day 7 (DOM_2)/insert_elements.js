// used for inserting elements 

// creating elements

let button1 = document.createElement("button");

button1.innerText = "in_div_atEnd!";
console.log(button1);

let button2 = document.createElement("button");

button2.innerText = "in_div_atStart!";
console.log(button2);

let button3 = document.createElement("button");

button3.innerText = "out_div_atEnd!";
console.log(button3);

let button4 = document.createElement("button");

button4.innerText = "out_div_atBegin!";
console.log(button4);

// for inserting elements

let div  = document.querySelector("div");
div.append(button1);
div.prepend(button2);
div.after(button3);
div.before(button4);


// creating a new element and add it at top

let newheading = document.createElement("h1");
newheading.innerHTML = "<i>hello this is form J.S</i>";

document.querySelector("body").prepend(newheading);


// for deleting the elements 

let para = document.querySelector("p");
para.remove();