let userInputs=[];
let questionArray = ["Enter a year", "Enter a name", "Enter a noun"];
let questionCounter = 0;
let questionTotal = 3;
for(let i = questionTotal-1; i >= 0; i--){
    questionTotal--;
    let skrot = prompt(questionArray[questionCounter] + `(${questionTotal} questions left)`);
    userInputs.push(skrot);
    questionCounter++;
};
let funnyStory=`In ${userInputs[0]}, computer pioneer ${userInputs[1]} found themselves working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`;
alert('All done! Ready for your story?');
console.log(funnyStory);
document.write(funnyStory);

//let originalStory="The bear is a wild animal. It can be found in black, brown and white color. It has sharp teeth and a lot of fur on its body. It can climb trees and eat fruits like berries. It loves to eat fish and honey. Bears can stand on their two back legs like human beings."