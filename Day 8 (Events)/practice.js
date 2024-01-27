let mod = document.querySelector("#mode");
let body = document.querySelector("body");
let currmod = "light";

mod.addEventListener("click", () => {
  if (currmod === "light") {
    currmod = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currmod = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currmod);
});
