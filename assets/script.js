var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var homescreen = document.querySelector("#homescreen");
var answerSection = document.querySelector("ol");
var timer;
var timerCount;
var h4 = document.querySelector(".correct");

var randomQuestion;
var currentQuestionIndex;
var score = 0;
var questionSection = document.querySelector("p")

var answerBtn1 = document.createElement("button")
var answerBtn2 = document.createElement("button")
var answerBtn3 = document.createElement("button")
var answerBtn4 = document.createElement("button")
var answerBtns = [answerBtn1,answerBtn2,answerBtn3,answerBtn4]


answerSection.appendChild(answerBtn1)
answerSection.appendChild(answerBtn2)
answerSection.appendChild(answerBtn3)
answerSection.appendChild(answerBtn4)




var question1 = {
    q: "Arrays in JavaScript can be used to store: ",
    a1:"Numbers and Strings", correct: false,
    a2:"Other Arrays", correct: false,
    a3: "Booleans", correct: false,
    a4:"All of the Above", correct: true,
    };
    
    
var question2 = {   
    q: "String values must be enclosed within _____ when being assigned to variables ",
    a1:"Commas", correct: false,
    a2:"Curly Brackets", correct: false,
    a3: "Quotes", correct: true,
    a4:"Parenthesis", correct: false,
};
    
var question3 = {
    q: "Commonly used data types DO NOT include: ",
    a1:"Alerts", correct: true,
    a2: "Booleans", correct: false,
    a3: "Strings", correct: false,
    a4: "Numbers", correct: false,
 
 };

 var question4 = {
    q: "The condition of an if/else statement is enclosed with: ",
    a1:"Quotes", correct: false,
    a2: "Curly Brackets", correct: false,
    a3: "Parenthesis", correct: true,
    a4: "Square Brackets", correct: false, 
 };
    


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
        if (timerCount === 0){
            clearInterval(timer);
            getScore()
        }
    }, 1000) 
  };

function getQuestion() {

    questionSection.setAttribute ("style", "font-size: 40px; font-weight: bold; padding: 0");
    questionSection.textContent = question1.q;
    answerBtn1.textContent = question1.a1;
    answerBtn2.textContent = question1.a2 ;
    answerBtn3.textContent = question1.a3 ;
    answerBtn4.textContent = question1.a4 ;
    for(var i = 0 ; i < answerBtns.length; i++){
        answerBtns[i].setAttribute("style", "font-size: 20px; padding: 15px; background-color: blueviolet; border-radius: 10px; border-color: black; display: flex; margin: 20px");
        answerBtns[i].addEventListener("click",getQuestion2)};
    
    
};

function checkAnswer(){


}
   /* questionSection.textContent = q1.quest1;
    questionSection.setAttribute ("style", "font-size: 40px; font-weight: bold; padding: 0");
    answerBtn1.textContent = q1.ans1 ;
    answerBtn2.textContent = q1.ans2 ;
    answerBtn3.textContent = q1.ans3 ;
    answerBtn4.textContent = q1.ans4 ;
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

    answerBtns[i].addEventListener("click",getQuestion2);
    }
    
    for(var e = 0 ; e < answerBtns.length; e++){
        liAll[e].setAttribute("style", "list-style: none; padding: 10px"  );
    }
    
    answerBtn4.addEventListener("click",function(){ 
        h4.textContent = "Correct ✅";
        score = score + 10;
    }) */




function getQuestion2() {
    questionSection.textContent = question2.q;
    answerBtn1.textContent = question2.a1;
    answerBtn2.textContent = question2.a2 ;
    answerBtn3.textContent = question2.a3 ;
    answerBtn4.textContent = question2.a4 ;
    for(var i = 0 ; i < answerBtns.length; i++){

        answerBtns[i].addEventListener("click",getQuestion3)};
};

function getQuestion3() {
    questionSection.textContent = question3.q;
    answerBtn1.textContent = question3.a1;
    answerBtn2.textContent = question3.a2 ;
    answerBtn3.textContent = question3.a3 ;
    answerBtn4.textContent = question3.a4 ;
    for(var i = 0 ; i < answerBtns.length; i++){
        answerBtns[i].setAttribute("style", "font-size: 20px; padding: 15px; background-color: blueviolet; border-radius: 10px; border-color: black; display: flex; margin: 20px");
        answerBtns[i].addEventListener("click",getQuestion4)};
       
    
};

function getQuestion4() {
    questionSection.textContent = question3.q;
    answerBtn1.textContent = question4.a1;
    answerBtn2.textContent = question4.a2 ;
    answerBtn3.textContent = question4.a3 ;
    answerBtn4.textContent = question4.a4 ;
    for(var i = 0 ; i < answerBtns.length; i++){
        answerBtns[i].setAttribute("style", "font-size: 20px; padding: 15px; background-color: blueviolet; border-radius: 10px; border-color: black; display: flex; margin: 20px");
        answerBtns[i].addEventListener("click",getScore)};
};

function getScore(){
    questionSection.textContent = "Your final score is: " + score;

}
        


  startButton.addEventListener("click", startGame);