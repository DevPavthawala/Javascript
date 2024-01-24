
// getting the attribute value

let div = document.querySelector("div");
console.log(div);

let value = div.getAttribute("id");
console.log(value);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
let para_value = para.getAttribute("class");
console.log(para_value);

// setting the attribute value

let para_new = para.setAttribute("class","newclass");
console.log(para_new); // show nulll because in set it dont print in console

// for style and accessing the style 

let changeIn = document.querySelector("div");

changeIn.style.backgroundColor = "red";
changeIn.style.fontSize = "20px";
changeIn.innerText = "Hello! this changed text";