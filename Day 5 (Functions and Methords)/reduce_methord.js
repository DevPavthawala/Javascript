// sum of array Element using reduce methord

let array = [1,2,3,4,5,6,7,8,9,10];

let sum = array.reduce((previous,current) => {
    return previous + current;
})

console.log(sum);

// finding the highest element from the array using reduce methord]


// code for finding highest element form array

let highestElemet = array.reduce((previous,current) => {
    return previous > current? previous : current;
})

console.log(highestElemet);