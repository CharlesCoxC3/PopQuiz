var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var homescreen = document.querySelector("#homescreen");
var timer;
var timerCount;
var questionSection = document.querySelector("#question-section");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var answerBtn = document.querySelector(".answers");
answerBtn.classList.add("hidden");
var highscore = document.querySelector(".highscore");
var highscoreBtn = document.querySelector("#saveScoreBtn");
var main = document.querySelector("main");
var title = document.querySelector("h1");


var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
console.log(choices);
var pointAdded = 10;
const maxQuestions = 4;


// object of array of questions
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

//Starts the Game/Timer/Gets the next Question
function startGame() {
    timerCount = 75;
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    questionSection.textContent = "";
    startButton.classList.add("hidden");
    questionSection.classList.remove("hidden");
    answerBtn.classList.remove("hidden");

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

    if (availableQuestions.length === 0 || questionCounter > maxQuestions){
        getScore()
    } 

    questionCounter++;
//Will grab a random question from question array & populate with corresponding Answer
    var questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionSection.textContent = currentQuestion.question;

    choices.forEach(function(choice){
        var number = choice.dataset["number"];
        choice.textContent = currentQuestion["choice" + number];
    })

    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
    

};

//adds event for each 'click' if the click corresponds to the correct dataset number then the answer selected should result correct
choices.forEach(function(choice){
    choice.addEventListener("click", function(e){
        console.log(e.target);
        if (!acceptingAnswers) return;

        acceptingAnswers= false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);

        var classtoApply = "incorrect";
        if (selectedAnswer == currentQuestion.answer){
            classtoApply = "correct";
            updateScore()
        }
        else{
            wrongAnswer()
        };
        console.log(classtoApply);

        selectedChoice.parentElement.classList.add(classtoApply);
        
        setTimeout(function(){
            selectedChoice.parentElement.classList.remove(classtoApply);
            getNewQuestion();
        }, 1000);
    });
});

//updates score on correct answers
function updateScore(){    
    score = score + 25
};

//subtracts time with incorrect answers
function wrongAnswer(){
    timerCount = timerCount -10
};

//will take user to the high score page
function getScore(){
var lastScore = score;
localStorage.setItem("lastScore", lastScore);
    clearInterval(timer);
    return window.location.assign("highscore.html");
};
// Starts Game
startButton.addEventListener("click", startGame);

