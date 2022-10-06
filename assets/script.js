var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var homescreen = document.querySelector("#homescreen");
var answerSection = document.querySelector("ol");
var timer;
var timerCount;

var currentQuestion = {};
var correctAnswer = true;
var score = 0;
var availableQuestions = [];
var questionSection = document.querySelector("p")
var quizQuestions = [
    
    {
    question1: "Arrays in JavaScript can be used to store: ",
    1: "Numbers and Strings",
    2: "Other Arrays",
    3: "Booleans",
    4: "All of the Above",
    answer: "4"
    },
    
    {
    question: "String values must be enclosed within _____ when being assigned to variables ",
    1: "Commas",
    2: "Curly Brackets",
    3: "Quotes",
    4: "Parenthesis",
    answer: "3"   
    },
    
    {
    question: "Commonly used data types DO NOT include: ",
    1: "Alerts",
    2: "Booleans",
    3: "Strings",
    4: "Numbers",
    answer: "1",    
    },
    
    {
    question: "The condition of an if/else statement is enclosed with: ",
    1: "Quotes",
    2: "Curly Brackets",
    3: "Parenthesis",
    4: "Square Brackets",
    answer: "3",    
    }
]

function startGame() {
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
   // startButton.classList.add("answer-btn");
    score = 0;
    questionSection.textContent = "";
    startButton.classList.add("hidden");
    getQuestion();
    startTimer();

  }

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time: " + timerCount;

    }, 010) 
  }

function getQuestion() {
    questionSection.textContent = "Q1: Arrays in JavaScript can be used to store:"; 
    questionSection.setAttribute ("style", "font-size: 40px; font-weight: bold; padding: 0");
    var answerBtn1 = document.createElement("button");
    var answerBtn2 = document.createElement("button");
    var answerBtn3 = document.createElement("button");
    var answerBtn4 = document.createElement("button");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var liAll = [li1,li2,li3,li4];
    var answerBtns = [answerBtn1, answerBtn2, answerBtn3, answerBtn4];
    answerBtn1.textContent = "1: " ;
    answerBtn2.textContent = "2: " ;
    answerBtn3.textContent = "3: " ;
    answerBtn4.textContent = "4: " ;
    answerSection.appendChild(li1);
    answerSection.appendChild(li2);
    answerSection.appendChild(li3);
    answerSection.appendChild(li4);
    li1.appendChild(answerBtn1);
    li2.appendChild(answerBtn2);
    li3.appendChild(answerBtn3);
    li4.appendChild(answerBtn4);

    for(var i = 0 ; i < answerBtns.length; i++){
        answerBtns[i].setAttribute("style", "font-size: 20px; padding: 15px; background-color: blueviolet; border-radius: 10px; border-color: black" );
    }
    for(var e = 0 ; e < answerBtns.length; e++){
        liAll[e].setAttribute("style", "list-style: none; padding: 10px"  );
    }
}


  startButton.addEventListener("click", startGame)
  