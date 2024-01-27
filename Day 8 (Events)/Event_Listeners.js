let btn = document.querySelector("#btn1");


// to add an Event 
// occur all at a time

btn.addEventListener("click", () => {
    console.log("button1 was clicked - handler 1");
});


btn.addEventListener("click", () => {
    console.log("button1 was clicked - handler 2");
});


const handler3 = () => {
    console.log("button1 was clicked - handler 3")
};

btn.addEventListener("click", handler3);


btn.addEventListener("click", () => {
    console.log("button1 was clicked - handler 4");
});

// to remove an Event

btn.removeEventListener("click",handler3);