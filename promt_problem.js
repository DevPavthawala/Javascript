
// let number = prompt("Enter a number");

// if (number % 5 === 0){
//     console.log(number + " is divisible by 5")
// }
// else{
//     console.log(number + " is not divisible by 5")
// }
// get your grade by your score

let score = prompt("Enter your score");

if(100>=score >80){
    console.log("Your Grade is A+");
}
else if(89>score>70){
    console.log("Your Grade is B");
}
else if(69>score>60){
    console.log("Your Grade is C");
}
else if(59>score>50){
    console.log("Your Grade is D");
}
else if(49>score>0){
    console.log("Your Grade is F");
}
else{
    console.log("Enter correct score between 0 - 100")
}