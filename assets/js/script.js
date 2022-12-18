// Header Elements
let viewScrBtn = document.querySelector("#view-scores");
let timeEl = document.querySelector("#time");
// Set starting time
let time = 75

// Introduction Section
let introEl = document.querySelector("#introduction");
let startBtn = document.querySelector("#start");

// Questions Section
let questionsEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
// Answer Buttons
let ans1Btn = document.querySelector("#answer1");
let ans2Btn = document.querySelector("#answer2");
let ans3Btn = document.querySelector("#answer3");
let ans4Btn = document.querySelector("#answer4");
var ansBtn = [ans1Btn, ans2Btn, ans3Btn, ans4Btn];
// Correct or Wrong
let cwEl = document.querySelector("#c-w");
// Questions answered
let questionCount = 0

// Finish Section
let finishEl = document.querySelector("#finish");
let scoreEl = document.querySelector("#score");
let initialsInput = document.querySelector("#initials");
let SubmitBtn = document.querySelector("#submit");

// Highscores Section
let highscoresEl = document.querySelector("#highscores");
let scoreListEl = document.querySelector("#score-list");
let backBtn = document.querySelector("#back");
let clearBtn = document.querySelector("#clear");
// Array of stored scores
let scoreList = [];

// Object storing question data
const questions = [
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];



function setTime() {
    let timerInterval = setInterval(function () {
        time--;
        timeEl.textContent = `Time: ${time}`;

        if (time === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finishEl.style.display = "block";
            scoreEl.textContent = time;
        }
    }, 1000);
}

setTime();

