// Task # 2
// Problem: Simple Quiz App
// Write a JavaScript program that conducts a quiz for a user. The program should:

// Store a list of 5 questions and their correct answers in two arrays.
// Use a for loop to display each question using prompt and ask for the user's answer.
// Use if-else to check if the user's answer is correct.
// Keep track of how many answers are correct and how many are wrong.
// At the end, display the user's total score and a message based on their performance (using nested if for grading).
// Requirements:
// Use two arrays: one for the questions and one for the correct answers.
// Use a for loop to display the questions and capture the user's answer.
// Use if-else to compare the user's answer with the correct one.
// Use nested if statements to give feedback based on the score (like grading A, B, C, etc.).

let questions = ["What symbol is used for comments in JavaScript (single-line)?",
                 "What symbol is used to define a template literal?",
                 "What keyword is used to exit a loop or function prematurely?",
                 "What data type represents true or false values?",
                 "What operator is used to check equality with type comparison?",
                 "What symbol is used for logical AND?",
                 "What symbol is used for logical OR?",
                 "What symbol is used to increment a value by 1?",
                 "What symbol is used to concatenate strings?",
                 "What symbol is used for modulus (remainder)?",
                 "What symbol is used for strict inequality comparison?",
                 "Which JavaScript method is used to remove the first item of an array?",
                 "Which method adds new items to the end of an array?",
                 "What is the output of `console.log(1 + '2')`?",
                 "What is the output of `console.log(!true === false)`?"
                 ];
let answers = ["//","`","break","boolean","===","&&","||","++","+","%","!==","shift","push","12","true"];
let userAnswer = [];

for(let i = 0; i < questions.length; i++){
    userAnswer.push(prompt(`${i+1}. ${questions[i]}`));
}

let points = 0;

for(let i=0; i<answers.length; i++){
    if(answers[i].toLowerCase() === userAnswer[i].toLowerCase()){
        ++points;
    }
}

let totalQuestions = questions.length;
let scorePercentage = (points / totalQuestions) * 100;

if(scorePercentage >= 80){
    alert(`Points : ${points}/${totalQuestions}\nExcellent work! You scored an A.\nKeep up the great performance!`);
}
else if(scorePercentage >= 60){
    alert(`Points : ${points}/${totalQuestions}\nGood job! You scored a B.\nYou're doing well, but there's room for improvement.`);
}
else if(scorePercentage >= 40){
    alert(`Points : ${points}/${totalQuestions}\nYou scored a C.\nNot bad, but you can definitely do better. Keep practicing!`);
}
else{
    alert(`Points : ${points}/${totalQuestions}\nYou scored an F.\nDon't be discouraged! Review the material and try again.`);
}
