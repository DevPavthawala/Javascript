// problem 1  -----> append the h1 tag

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from apna college";

// Performa 2 -----> change in multiple tags 

let divs = document.querySelectorAll(".same");
let idx =1;
for(div of divs){
    div.innerText = `This is manuplated text from ${idx}`;
    idx++;
    console.log(div.innerText);
}