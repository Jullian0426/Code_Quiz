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



