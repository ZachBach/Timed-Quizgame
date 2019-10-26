var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var feedBack = document.getElementById("feedback");

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");  
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockCountdown, 1000);
  timerEl.textContent = time;
  getQuestion();
}
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  
  currentQuestion.choices.forEach(function(choice, i) {
    var userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choice");
    userChoice.setAttribute("value", choice);
    userChoice.textContent = i + 1 + ". " + choice;
    userChoice.onclick = questionClick;
    choicesEl.appendChild(userChoice);
  });
}
function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
  
    feedBack.textContent = "So close my lord!";
  } else {
  
    feedBack.textContent = "You got it right!";
  }
  

  feedBack.setAttribute("class", "feedback");
  setTimeout(function() {
    feedBack.setAttribute("class", "feedback hide");
  }, 1000);



  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
function quizEnd() {
  clearInterval(timerId);
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}
function clockCountdown() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}


startButton.onclick = startQuiz;

