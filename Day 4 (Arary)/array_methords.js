// using push to add value in Array

let items =['apple','potato','tomato','litchi'];

items.push('chips','mango');
console.log(items);

// using pop to remove last item from array
items.pop();
console.log(items);

// converting array elements into string

console.log(items.toString());

// concatination in array

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
let num3= [11,12,13,14,15];
let num = num1.concat(num2,num3);
console.log('This is concat() :',num);

// unshift methord to add value at the beginning

num.unshift(16);
console.log('This is unshift() :',num);

// shift methord to remove value at the beginning

num.shift();
console.log('This is shift() :',num);

// slice methord for return piece of array

console.log(num.slice(3,5));

// splice methord is used for changing original array ----> splice(start index,end count,new element)

num.splice(2,2,"Dev","Pavthawala","Tejas");
console.log("this is splice():",num);
