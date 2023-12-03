var startButtonEl = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var displayedQuestionEl = document.querySelector(".displayed-question");
var answerChoices = document.querySelector(".answer-choices");
var answerMatch = document.querySelector(".answer-match");
var submitScoreForm = document.querySelector(".high-score-submit");
var submitScoreEl = document.querySelector(".submit-score");
var highScoreButton = document.querySelector(".high-scores");
var highScoreList = document.querySelector(".high-score-list");
var score = 0;
var scores; //create object of all initials and scores when viewing high scores
var secondsLeft = 45;
var questionsArray = [
  "What is the Bestagon?",
  "Why do apples fall from trees?",
  "If a tree falls in the woods, does it make a sound?",
];
var answersArray = [
  ["Square", "Hexagon", "Circle"],
  ["Gravity", "Magnets", "They don't"],
  ["Yes", "No", "Impossible to know"],
];
var correctArray = ["Hexagon", "Gravity", "Yes"];
var question = {
  questions: Object.values(questionsArray),
  answerChoices: Object.values(answersArray),
  answerCorrect: Object.values(correctArray),
};
var correctAnswer;

submitScoreForm.style.display = "none";

function startQuiz() {
  // start timer function call here

  var randIndex = Math.floor(Math.random() * question.questions.length);

  renderQuestion(question, randIndex);
}

function startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end quiz
      endQuiz();
    }
  }, 1000);
}

function renderQuestion(questionObject, index) {
  var renderedQuestion = questionObject.questions[index];
  var renderedAnswers = questionObject.answerChoices[index];
  correctAnswer = questionObject.answerCorrect[index];

  displayedQuestionEl.textContent = renderedQuestion;

  // create list elements for each answer choice
  if (renderedAnswers) {
    for (var i = 0; i < renderedAnswers.length; i++) {
      var ans = document.createElement("button");

      ans.textContent = renderedAnswers[i];
      answerChoices.appendChild(ans);
    }

    //splice out the used question and answers
    questionObject.questions.splice(index, 1);
    questionObject.answerChoices.splice(index, 1);
    questionObject.answerCorrect.splice(index, 1);
  }
}

function endQuiz() {
  timeEl.style.display = "none";
  displayedQuestionEl.textContent = "Your final score: " + score;
  startButtonEl.disabled = false;
  startButtonEl.textContent = "Play Again";
  submitScoreForm.style.display = "block";

  //reset object values to play again
  question.questions = questionsArray;
  question.answerChoices = answersArray;
  question.answerCorrect = correctArray;
}

startButtonEl.addEventListener("click", function (event) {
  //reload the page to play again instead of dealing with play again logic
  if (startButtonEl.textContent === "Play Again") {
    location.reload();
  }

  startButtonEl.disabled = true;
  timeEl.textContent = "Time remaining: " + secondsLeft;
  secondsLeft = 45;

  startTimer();
  startQuiz();
});

answerChoices.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    answerMatch.textContent = "Correct!";
    score++;
  } else {
    answerMatch.textContent = "Wrong!";
    secondsLeft -= 5;
  }

  //clear answer buttons after making selection
  while (answerChoices.firstChild) {
    answerChoices.removeChild(answerChoices.firstChild);
  }

  if (question.questions[0]) {
    startQuiz();
  } else {
    endQuiz();
  }
});

submitScoreEl.addEventListener("click", function (event) {
  event.preventDefault();
  submitScoreEl.disabled = true;
  localStorage.setItem(
    document.querySelector(".initials").value,
    JSON.stringify(score)
  );
});

highScoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  while (highScoreList.firstChild) {
    highScoreList.removeChild(highScoreList.firstChild);
  }
  var highScore;
  scores = { ...localStorage };

  //display high scores from local storage
  for (var i = 0; i < Object.entries(scores).length; i++) {
    console.log("test");
    highScore = document.createElement("li");
    highScore.textContent =
      Object.entries(scores)[i][0] + ": " + Object.entries(scores)[i][1];
    highScoreList.appendChild(highScore);
  }
});
