var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("submitButton");
var highScore = document.getElementById("highScore");
var startPage = document.getElementById("startPage");
var quizPage = document.getElementById("quizPage");
let answerOptions = document.getElementById("answer-options");
var questionText = document.getElementById("question-text");
let table = document.getElementById("table");
var buttonList = "";
var currentQuestionIndex = 0;
var currentAnswerIndex = [0, 1, 2, 3, 4];

seconds = 300;

startButton.addEventListener("click", generateQuiz);
startButton.addEventListener("click", function () {
  var secondCount = document.getElementById("count-up");
  setInterval(setTime, 1000);

  function setTime() {
    --seconds;
    secondCount.innerHTML = seconds;
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
      "for (var i = 0; i <= 5; i++)",
    ],
    correctAnswer: "for (var i = 0; i <= 5; i++)",
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

  let results = questions[currentQuestionIndex].correctAnswer;

  if (!answerBtn.matches(".bt")) {
    console.log("not a answer");
    return;
  }

  if (answerBtn.textContent !== results) {
    console.log("incorrect");
    document.body.style.backgroundColor = "red";
    document.getElementById("answer-options").style.backgroundColor = "red";
    seconds = seconds - 5;
  } else {
    console.log("correct");
    document.body.style.backgroundColor = "green";
    document.getElementById("answer-options").style.backgroundColor = "green";
  }
}

answerContainer.addEventListener("click", userAnswer);
startButton.addEventListener("click", createNextButton);
startButton.addEventListener("click", createSubmitButton);

function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.textContent = "next";
  nextButton.classList.add("next");
  answerOptions.appendChild(nextButton);
  nextButton.addEventListener("click", next);
  nextButton.addEventListener("click", createSubmitButton);
  function next() {
    currentQuestionIndex++;
    answerOptions.innerHTML = "";
    document.body.style.backgroundColor = "bisque";
    document.getElementById("answer-options").style.backgroundColor = "bisque";
    renderQuestion();
    createNextButton();
  }
}

let usernameInput = document.querySelectorAll("username");

function createSubmitButton() {
  const createSubmitButton = document.createElement("button");
  createSubmitButton.textContent = "submit";
  createSubmitButton.classList.add("next");
  answerOptions.appendChild(createSubmitButton);

  createSubmitButton.addEventListener("click", registerScoreMessage);

  function registerScoreMessage() {
    let usernameInput = document.querySelectorAll("username");
    usernameInput = prompt("please enter username: ");
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("seconds", seconds);
  }
}

highScore.addEventListener("click", showHighscore);

function showHighscore() {
  startPage.classList.add("isHidden");
  quizPage.classList.add("isHidden");
  table.classList.remove("isHidden");
  table.classList.add("table");

  let displayedUsername = localStorage.getItem("username");
  let displayedScore = localStorage.getItem("seconds");

  if (displayedUsername && displayedScore !== null) {
    document.getElementById("table-row-username").innerText = "Username: ";
    document.getElementById("table-row-score").innerText = "score: ";
    document.getElementById("table-username").innerText = displayedUsername;
    document.getElementById("table-score").innerText = displayedScore;

    console.log(displayedUsername, displayedScore);
  }
}
