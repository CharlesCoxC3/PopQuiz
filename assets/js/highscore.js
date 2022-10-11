
var username = document.getElementById("username");
var saveButton = document.querySelector("#saveScore");
var playAgainButton = document.querySelector("#play-again");
var resetScoreButton = document.querySelector("#reset-scores");
var userScore = document.querySelector("#score");
var lastScore = localStorage.getItem("lastScore")
var ol = document.querySelector("ol");
var highScoreList = JSON.parse(localStorage.getItem("lastHighScores")) || [];
var lastScore;

//if no recent high scores displays 0
if (lastScore == null){
    lastScore = 0
};
userScore.textContent = "Your Score is: " + lastScore;


//Play again function
playAgainButton.addEventListener("click", function(event){
    event.preventDefault();
    return window.location.assign("index.html");
});

//Runs input function for saving name, prevents no name entry
saveButton.addEventListener("click", function(){
    if (username.value === ""){
        window.alert("You must enter a name")
    }
    else {
    var savedName = username.value;
    var listName = document.createElement("li");
    listName.textContent = lastScore + " - " + savedName;
    ol.appendChild(listName);
    //var lastHighScore = listName.textContent
    };

//Creates array for last high scores and saves them/sorts them by score
    var lastHighScore = {
        score: lastScore,
        name: savedName,
    };
    highScoreList.push(lastHighScore);
    highScoreList.sort((a,b) => b.score - a.score);
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
});


//Clears entry and local storage for the high scores
resetScoreButton.addEventListener("click", function(){
    ol.innerHTML= ""
    localStorage.clear(highScoreList)
});

