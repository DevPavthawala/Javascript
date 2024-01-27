// priority of events is more in J S then html

let prior = document.querySelector("#btn1");


// e is the event Object
prior.onclick = (e) => {
    console.log(e);
    console.log("Event type --> ",e.type);
    console.log(e.target);
    console.log("X :",e.clientX,"Y :",e.clientY);
    console.log("clicked once!");
}