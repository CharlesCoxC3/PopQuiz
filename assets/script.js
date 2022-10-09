var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var homescreen = document.querySelector("#homescreen");
var timer;
var timerCount;
var questionSection = document.querySelector("#question-section");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var answerBtn = document.querySelector(".answers");
answerBtn.classList.add("hidden");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
console.log(choices);
var pointAdded = 10;
const maxQuestions = 4;

var questions =[
    {
    question: "Arrays in JavaScript can be used to store: ",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the Above",
    answer: 4
},

    {
    question: "String values must be enclosed within _____ when being assigned to variables ",
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parenthesis",
    answer: 3
},

    {
    question: "Commonly used data types DO NOT include: ",
    choice1: "Alerts",
    choice2: "Booleans",
    choice3: "Strings",
    choice4: "Numbers",
    answer: 1
},

    { 
    question:"The condition of an if/else statement is enclosed with: ",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parenthesis",
    choice4: "Square Brackets",
    answer: 3
},
]
    
function startGame() {
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    questionSection.textContent = "";
    startButton.classList.add("hidden");
    questionSection.classList.remove("hidden")
    answerBtn.classList.remove("hidden")
    startTimer();
    getNewQuestion();

};

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time: " + timerCount;
        if (timerCount <1){
            clearInterval(timer);
            getScore()
        }
    }, 1000) 
};

function getNewQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionSection.textContent = currentQuestion.question;
}


function updateScore(){    
    score = score + 25
};

function wrongAnswer(){
    timerCount = timerCount -10
};

/*
function getScore(){
    answerSection.innerHTML = ""
    questionSection.textContent = "Your final score is: " + score;

}
        */


  startButton.addEventListener("click", startGame);