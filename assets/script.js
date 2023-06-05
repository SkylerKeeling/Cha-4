var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("submitButton");
var reset = document.getElementById("reset")
var highScore = document.getElementById("highScore");
var startPage = document.getElementById("startPage");
var quizPage = document.getElementById("quizPage");

var questionText = document.getElementById("question-text");
var buttonList;
var trueAnswer = document.querySelectorAll("true");
var falseAnswer = document.querySelectorAll("false");
var currentQuestionIndex = 0;
var currentAnswerIndex = [0, 1, 2, 3];
trueAnswer = true;
falseAnswer = false;



var questions =[
    {
        questionText: "How do you write 'Hello World' in an alert box?", 
        questionAnswers: ["msgBox('Hello World');",
                            "alertBox('Hello World');", 
                            "msg('Hello World');", 
                            "alert('Hello World')"],
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

function generateQuiz() {
    startPage.classList.add("isHidden");
    quizPage.classList.remove("isHidden");
    renderQuestion();
}

function renderQuestion() {
    var currentQuestionObject = questions[currentQuestionIndex];
    questionText.textContent = currentQuestionObject.questionText;
    var choices = currentQuestionObject.questionAnswers;
    var buttonList = "";
   

    choices[0].createElement("buttonOne");
    choices[1].createElement("buttonTwo");
    choices[2].createElement("buttonThree");
    choices[3].createElement("buttonFour");
    var buttonOne = getElementById("buttonOne");
    var buttonTwo = getElementById("buttonTwo");
    var buttonThree = getElementById("buttonThree");
    var buttonfour = getElementById("buttonFour");
    buttonOne.textContent = choices[0];
    buttonTwo.textContent = choices[1];
    buttonThree.textContent = choices[2];
    buttonfour.textContent = choices[3];
    buttonOne.addEventListener("click", console.log("button clicked"));
    buttonTwo.addEventListener("click", console.log("button clicked"));
    buttonThree.addEventListener("click", console.log("button clicked"));
    buttonFour.addEventListener("click", console.log("button clicked"));
    buttonList.append("buttonOne", "buttonTwo", "buttonThree", "buttonFour");
           
            
       
       
       
       
        };

     







        // if(buttonList == questions[i].correctAnswer) {
        //     window.alert("Correct!");
        //     } else {
        //       window.alert("Incorrect!");
        //     seconds - 5;
       



       
        
        
        
        
        
        // function answerFeedback () {
        // if(buttonList == correctAnswer) {
        //     window.alert("Correct!");
        // } else {
        //   window.alert("Incorrect!");
        //     seconds - 5;
        // }
        // }
        
        // 1 - TODO: Create a new button

    
        
        // 2 - TODO: Set the text of the button to be the choice text

        // 4 - TODO: Add a click event listener to the button that console logs "Button was clicked"

        console.log("Button was clicked");

        // 3 - TODO: Append new button to button list element
        
    




Seconds = 0;

startButton.addEventListener("click", generateQuiz);
startButton.addEventListener("click", function () {

    var secondCount = document.getElementById("count-up");
    setInterval(setTime, 1000);
    
    function setTime() {
      ++Seconds;
      secondCount.innerHTML = Seconds;
      if (Seconds === 5000000) {
        window.alert("Quiz failed, please try again");
      }
    }
});




highScore.addEventListener("click", viewHighScore);
// submitButton.addEventListener("click", submitScore);
//trueAnswer.addEventListener("click", trueAnswer.style.backgroundColor="green");



function resetButton() {
    startPage.classList.remove("isHidden");
    quizPage.classList.add("isHidden");
    document.querySelectorAll("reset").addEventListener("click", function (){
        preventDefault();
    })
}



function viewHighScore() {
    startPage.classList.add("isHidden");
    quizPage.classList.add("isHidden");
    highScore.style.display = "block";
    highScore.style.color = "black";

}

function submitScore() {


}









    