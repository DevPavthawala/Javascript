// some common properties in DOM

let div = document.querySelector("div");
console.dir(div);
console.log("Show the tag name :",div.tagName);
console.log("Show inner text :",div.innerText);
console.log("Give code in HTML :",div.innerHTML);
console.log("show textual content even for hidden element",div.textContent);


let heading = document.querySelector("h1");
console.log("Show inner text :",heading.innerText);
console.log("in h1 the is not visibel so to get it textcontent is used :",heading.textContent);

// manuplation

let manuplation = document.querySelector("h1");

console.log("manuplated using DOM : ",manuplation.innerText = "new heading");