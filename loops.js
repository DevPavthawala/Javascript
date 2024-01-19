for(let i = 1;i <=5;i++){
    console.log("This Day 3 of learnig JS.");
}

// calcualate the sum of n number 

let sum = 0;
let n = 100;

for(i = 1;i <=n;i++){
    sum += i;
}
console.log(`The Sum is ${sum}`);

// while loop

let mj =1;
while(m<=5){
    console.log(`Looping with While Loop :${m}`);
    m++;
}

// do while loop

let i =20;
do{
    console.log(i);
    i++;

} while(i<=10);

// for of loop(helps in strings and arrays).

let str = "Dev Pavthawla"

let size =0;

for(let i of str){ // also know as iterator (i).
    console.log("i = ",i);
    size++;
}

console.log('size = ',size)

// for in loops (used for objects)

let student = {
    name : "Dev Pavthawala",
    age : 22,
    country : 'India',
    cgpa : 9.55
}

for(let key in student){
    console.log("key = ",key,"value =",student[key]);
}