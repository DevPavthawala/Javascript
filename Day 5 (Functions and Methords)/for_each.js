// foreach loops in array

 let arr = [1,2,3,4,5];

 arr.forEach((val) => {
    console.log(val)
 })

//  print square of given Array

arr.forEach((val) => {
    console.log(val*val)
})

// same using arrow function using callback
let num1  = [54547,56546];

let square = (num1) => {
    console.log(num1**2);
} 

num1.forEach(square)