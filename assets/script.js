var startButton = document.getElementById("startButton");
var reset = document.getElementById("reset")
var highScore = document.getElementById("highScore");
var startPage = document.getElementById("startPage");
var quizPage = document.getElementById("quizPage");
var questionText = document.getElementById("question-text");
var buttonList = document.getElementById("button-list");
var trueAnswer = document.querySelectorAll("true");
var falseAnswer = document.querySelectorAll("false");
var currentQuestionIndex = 0;
trueAnswer = true;
falseAnswer = false;

var questions =[
    {
        questionText: "How do you write 'Hello World' in an alert box?", 
        questionAnswers: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World')"],
        correctAnswer: "alert('Hello World')"
    },
    {
        questionText: "How do you call a function named 'myFunction'?",
        questionAnswers: ["call myFunction()", "myFunction()", "call.myFunction()", "call function myFunction()"],
        correctAnswer: "myFunction()"
    },


];



startButton.addEventListener("click", generateQuiz);
highScore.addEventListener("click", viewHighScore);
trueAnswer.addEventListener("click", trueAnswer.style.backgroundColor="green");


//add a timer 

function generateQuiz() {
    startPage.classList.add("isHidden");
    quizPage.classList.remove("isHidden");
    renderQuestion();

}

function renderQuestion() {
    var currentQuestionObject = questions[currentQuestionIndex];
    questionText.textContent = currentQuestionObject.questionText;
    var choices = currentQuestionObject.questionAnswers;
    for (var i = 0; i < choices.length; i++) {
        var choiceText = choices[i];
        console.log(choiceText);
        // 1 - TODO: Create a new button

        // 2 - TODO: Set the text of the button to be the choice text

        // 4 - TODO: Add a click event listener to the button that console logs "Button was clicked"

        // 3 - TODO: Append new button to button list element
    }


    console.log(currentQuestionObject);

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

    