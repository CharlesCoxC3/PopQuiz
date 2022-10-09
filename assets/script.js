var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var homescreen = document.querySelector("#homescreen");
var timer;
var timerCount;
var h4 = document.querySelector(".correct");
var questionSection = document.querySelector("p")
var quizAnswers = document.querySelectorAll(".answerBtns");
var index = correctAnswer
var score = 0;
var correctAnswer;

/*
var answerBtn1 = document.createElement("button")
var answerBtn2 = document.createElement("button")
var answerBtn3 = document.createElement("button")
var answerBtn4 = document.createElement("button")



answerSection.appendChild(answerBtn1)
answerSection.appendChild(answerBtn2)
answerSection.appendChild(answerBtn3)
answerSection.appendChild(answerBtn4) */

var q1 = {
    question:"Arrays in JavaScript can be used to store: ",
    answers: ["Numbers and Strings","Other Arrays","Booleans","All of the Above"],
    correctAnswer: 3
}

var q2 = {
    question: "String values must be enclosed within _____ when being assigned to variables ",
    answers: ["Commas","Curly Brackets", "Quotes","Parenthesis"],
    correctAnswer: 2
}

var q3 = {
    question: "Commonly used data types DO NOT include: ",
    answers: ["Alerts","Booleans","Strings","Numbers"],
    correctAnswer: 0
}

var q4 = { 
    question:"The condition of an if/else statement is enclosed with: ",
    answers:["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
    correctAnswer: 2
}

    
function startGame() {
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    score = 0;
    questionSection.textContent = "";
    startButton.classList.add("hidden");
    answerSection.classList.remove("hidden")
    getQuestion1();
    startTimer();

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


function updateScore(){
    
    score = score + 25

};

function wrongAnswer(){
    timerCount = timerCount -10

};

function resetQuiz(){
    var quizAnswers = document.querySelectorAll(".answerBtns");
    quizAnswers = null
}

   /* questionSection.textContent = q1.quest1;
    questionSection.setAttribute ("style", "font-size: 40px; font-weight: bold; padding: 0");


    for(var i = 0 ; i < answerBtns.length; i++){
        answerBtns[i].setAttribute("style", "font-size: 20px; padding: 15px; background-color: blueviolet; border-radius: 10px; border-color: black" );

    answerBtns[i].addEventListener("click",getQuestion2);
    }
    
    for(var e = 0 ; e < answerBtns.length; e++){
        liAll[e].setAttribute("style", "list-style: none; padding: 10px"  );
    }
    
    answerBtn4.addEventListener("click",function(){ 
        h4.textContent = "Correct ✅";
        score = score + 10;
    }) */




/*
function getScore(){
    answerSection.innerHTML = ""
    questionSection.textContent = "Your final score is: " + score;

}
        */


  startButton.addEventListener("click", startGame);