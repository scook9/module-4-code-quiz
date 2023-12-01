// refer to student section 26 for JS logic
var startButtonEl = document.querySelector(".start-button");
var displayedQuestionEl = document.querySelector(".displayed-question");
var answerChoices = document.querySelector(".answer-choices");
var score = 0;
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
  questions: questionsArray,
  answerChoices: answersArray,
  answerCorrect: correctArray,
};
var correctAnswer;

// event listener for game start-
// function to create random question and answers document.createElement("'element_name'")
// store index of random question to get correct answers
// event listener for answer selection
// check if answer matches correct answer array
// display correct/incorrect under next question and answers
// end game after all questions, event listener to save high score
//

function startQuiz() {
  // start timer function call here
  var randIndex = Math.floor(Math.random() * questionsArray.length);
  console.log(randIndex);
  renderQuestion(question, randIndex);
}

function startTimer() {}

function endQuiz() {}

function renderQuestion(questionObject, index) {
  var renderedQuestion = questionObject.questions[index];
  var renderedAnswers = questionObject.answerChoices[index];
  correctAnswer = questionObject.answerCorrect[index];

  displayedQuestionEl.textContent = renderedQuestion;
  for (var i = 0; i < renderedAnswers.length; i++) {
    var ans = document.createElement("button");

    ans.textContent = renderedAnswers[i];
    answerChoices.appendChild(ans);
  }

  console.log(renderedQuestion, renderedAnswers, correctAnswer);
}

startButtonEl.addEventListener("click", function (event) {
  console.log("start");
  startButtonEl.disabled = true;
  startQuiz();
});

answerChoices.addEventListener("click", function (event) {
  console.log("choice selected");
  console.log(event.target);
  if (event.target.textContent === correctAnswer) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong!");
    score--;
  }
  console.log("current score: " + score);
});
