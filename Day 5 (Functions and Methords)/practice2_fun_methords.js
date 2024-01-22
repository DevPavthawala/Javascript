// ask user for n number of end element in array and

let userInput = prompt("Enter the number");
let arr = [];

for (i =1; i<=userInput;i++){
    arr[i-1] = i;

}

let sum = arr.reduce((prev,curr) => {
    return prev + curr;
})

let multi = arr.reduce((prev,curr) => {
    return prev * curr;
})
console.log("This is sum of Array",sum);
console.log("This is multiplication of Array",multi);