var startButton = document.getElementById("startButton");
var reset = document.getElementById("reset")
var highScore = document.getElementById("highScore");
var nextButton = document.getElementById("nextButton");
var startPage = document.getElementById("startPage");
var quizPageOne = document.getElementById("quizPageOne");
var quizPageTwo = document.getElementById("quizPageTwo");
var quizPageThree = document.getElementById("quizPageThree");
var quizPageFour = document.getElementById("quizPageFour");
var quizPageFive = document.getElementById("quizPageFive");
var trueAnswer = document.querySelectorAll("true");
var falseAnswer = document.querySelectorAll("false");
trueAnswer = true;
falseAnswer = false;

quizPageOne.style.display = "none";
quizPageTwo.style.display = "none";
quizPageThree.style.display = "none";
quizPageFour.style.display = "none";
quizPageFive.style.display = "none";

startButton.addEventListener("click", generateQuiz);
highScore.addEventListener("click", viewHighScore);
trueAnswer.addEventListener("click", trueAnswer.style.backgroundColor="green");


//add a timer 

function generateQuiz() {
    startPage.style.display = "none";
    quizPageOne.style.display = "block";


}


function viewHighScore() {

}

function resetButton() {

}


function returnFalse() {
    return alert("False");
}

function returnTrue() {
    return alert("True");
    }

    