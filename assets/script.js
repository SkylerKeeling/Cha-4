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
var currentAnswerIndex = [0, 1, 2, 3];
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
    {
        questionText: "How do you create a function in JavaScript?",
        questionAnswers: ["function = myFunction()", "function:myFunction()", "function myFunction()", "function-myFunction()"],
        correctAnswer: "function myFunction()"
    },
    {
        questionText: "How to write an IF statement for executing some code if 'i' is NOT equal to 27?",
        questionAnswers: ["if (i <> 27)", "if i <> 27", "if i =! 27", "if (i != 27)"],
        correctAnswer: "if (i != 27)"
    },
    {
        questionText: "How does a FOR loop start?",
        questionAnswers: ["for (i = 0; i <= 5)", "for (i ,=5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
        correctAnswer: "for (i = 0; i <= 5; i++)"
    }
];



startButton.addEventListener("click", generateQuiz);
startButton.addEventListener("click", countUpText);
highScore.addEventListener("click", viewHighScore);
//trueAnswer.addEventListener("click", trueAnswer.style.backgroundColor="green");

//add a timer

function countUpText () {
    var time = 0;
    ++time;
    document.getElementById("count-up").innerHTML = time;

    // if (time === 500000) {
        
    // }
}




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

        var currentAnswerObject = choiceText[currentAnswerIndex]
        
        



        // 2 - TODO: Set the text of the button to be the choice text

        
       


        // 4 - TODO: Add a click event listener to the button that console logs "Button was clicked"

        console.log("Button was clicked");

        // 3 - TODO: Append new button to button list element
        
    
    }


    console.log(currentQuestionObject);

}





function viewHighScore() {
    startPage.classList.add("isHidden");
    quizPage.classList.add("isHidden");
    highScore.style.display = "block";
    highScore.style.color = "black";

}

function resetButton() {

}


function returnFalse() {
    
    return alert("False");

}




function returnTrue() {
    return alert("True");
    }

    