// generate username based on input and generate a username starting with @ username and the length of username

let str = prompt("Enter your name for generating username");

str = `@${str}${str.length}`;
console.log(`The username is : ${str}`);