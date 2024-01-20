// calcualte the average of array

let marks = [97,85,91,55,75];
let newsum = 0;

for(let score of marks){
    
    newsum += score;
}
console.log(newsum/marks.length);

// make discount of 10% and print new array

let price = [250,645,300,900,50];

for (let i = 0;i<price.length;i++){
    let val = price[i] /10;
    price[i] -=val;    
}
console.log(price);