let userInputs=[];
let funnyStory="The ${userInputs[0]} is a wild ${userInputs[1]}. It can be found in ${userInputs[2]}, ${userInputs[3]} and ${userInputs[4]} color. It has ${userInputs[5]} and a lot of fur on its body. It can ${userInputs[6]} and eat fruits like berries. It loves to ${userInputs[7]} fish and ${userInputs[8]}. ${userInputs[0]} can stand on their two back legs like ${userInputs[9]}."
let numbersOfQuestions = [userInputs[0], userInputs[1], userInputs[2], userInputs[3], userInputs[4], userInputs[5], userInputs[6], userInputs[7], userInputs[8], userInputs[9]];

//let noun = prompt("Enter a noun: ");
//let verb = prompt("Enter a verb");
//let color = prompt("Enter a color");

let questions = 3;
let questionArray = ["Enter a noun", "Enter a verb", "Enter a color"];
let questionCounter = 0;

for(let i = questions; i >= 0; i--){
    questionCounter++;
    console.log(questionCounter);
    //console.log(questionArray[i] + `(${} questions left)`);
};

//let originalStory="The bear is a wild animal. It can be found in black, brown and white color. It has sharp teeth and a lot of fur on its body. It can climb trees and eat fruits like berries. It loves to eat fish and honey. Bears can stand on their two back legs like human beings."