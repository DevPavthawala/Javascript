// // printing all even number between 0 to 100

// for (i = 0;i<=100;i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// creating the game that user guesses the correct number

let number = prompt('Enter the number between 0 to 20');
let gameNum = 7;

while(gameNum != number ){
    number = prompt('You Enter the wrong number. Guess again ! ');
}
console.log("Congratulation your have guessed it.")