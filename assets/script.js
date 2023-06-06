var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("submitButton");
var resetButton = document.getElementById("resetButton");
var highScore = document.getElementById("highScore");
var startPage = document.getElementById("startPage");
var quizPage = document.getElementById("quizPage");
let answerOptions = document.getElementById("answer-options");
var questionText = document.getElementById("question-text");
var buttonList = "";
var trueAnswer = document.querySelectorAll("true");
var falseAnswer = document.querySelectorAll("false");
var currentQuestionIndex = 0;
var currentAnswerIndex = [0, 1, 2, 3];
trueAnswer = true;
falseAnswer = false;

seconds = 0;

resetButton.addEventListener("click", reset);
highScore.addEventListener("click", viewHighScore);
startButton.addEventListener("click", generateQuiz);
startButton.addEventListener("click", function () {
  var secondCount = document.getElementById("count-up");
  setInterval(setTime, 1000);

  function setTime() {
    ++seconds;
    secondCount.innerHTML = seconds;
    if (seconds === 5000000) {
      window.alert("Quiz failed, please try again");
    }
  }
});

var questions = [
  {
    questionText: "How do you write 'Hello World' in an alert box?",
    questionAnswers: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World')",
    ],
    correctAnswer: "alert('Hello World')",
  },
  {
    questionText: "How do you call a function named 'myFunction'?",
    questionAnswers: [
      "call myFunction()",
      "myFunction()",
      "call.myFunction()",
      "call function myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    questionText: "How do you create a function in JavaScript?",
    questionAnswers: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "function-myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    questionText:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 27?",
    questionAnswers: [
      "if (i <> 27)",
      "if i <> 27",
      "if i =! 27",
      "if (i != 27)",
    ],
    correctAnswer: "if (i != 27)",
  },
  {
    questionText: "How does a FOR loop start?",
    questionAnswers: [
      "for (i = 0; i <= 5)",
      "for (i ,=5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
    ],
    correctAnswer: "for (i = 0; i <= 5; i++)",
  },
];

function generateQuiz() {
  startPage.classList.add("isHidden");
  quizPage.classList.remove("isHidden");
  renderQuestion();
}

var currentQuestionObject = questions[currentQuestionIndex];

function renderQuestion() {
  var currentQuestionObject = questions[currentQuestionIndex];
  questionText.textContent = currentQuestionObject.questionText;
  var choices = currentQuestionObject.questionAnswers;
  choices.forEach((choices) => {
    const button = document.createElement("button");
    button.innerText = choices;
    button.classList.add("bt");

    answerOptions.appendChild(button);
  });
}

var answerContainer = document.getElementById("answer-options");

function userAnswer(event) {
  let answerBtn = event.target;

  let results = questions[0].correctAnswer;

  if (!answerBtn.matches(".bt")) {
    console.log("not a answer");
    return;
  }

  if (answerBtn.innerHTML !== results) {
    console.log("incorrect");
    document.body.style.backgroundColor = "red";
  } else {
    console.log("correct");
    document.body.style.backgroundColor = "green";
    seconds - 5;
  }
}

answerContainer.addEventListener("click", userAnswer);
startButton.addEventListener("click", createNextButton);


function createNextButton () {
    const nextButton = document.createElement("button");
    nextButton.textContent = "next";
    nextButton.classList.add("next");
    answerOptions.appendChild(nextButton);
    nextButton.addEventListener("click", next);
    function next () {
    return currentQuestionIndex++;

   
}

}




highScore.addEventListener("click", viewHighScore);
// submitButton.addEventListener("click", submitScore);
//trueAnswer.addEventListener("click", trueAnswer.style.backgroundColor="green");

function reset() {
  startPage.classList.remove("isHidden");
  quizPage.classList.add("isHidden");
  seconds = 0;
}

function viewHighScore() {
  startPage.classList.add("isHidden");
  quizPage.classList.add("isHidden");
  highScore.style.display = "block";
  highScore.style.color = "black";
}

function submitScore() {}
