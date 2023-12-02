var startButtonEl = document.querySelector(".start-button");
var displayedQuestionEl = document.querySelector(".displayed-question");
var answerChoices = document.querySelector(".answer-choices");
var answerMatch = document.querySelector(".answer-match");
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
  questions: Object.values(questionsArray),
  answerChoices: Object.values(answersArray),
  answerCorrect: Object.values(correctArray),
};
var correctAnswer;
var usedIndexes = []; //use to ensure indexes are not repeated

// event listener for game start-
// function to create random question and answers document.createElement("'element_name'")-
// store index of random question to get correct answers-
// event listener for answer selection-
// check if answer matches correct answer array-
// display correct/incorrect under next question and answers
// end game after all questions, event listener to save high score
//

function startQuiz() {
  // start timer function call here

  var randIndex = Math.floor(Math.random() * question.questions.length);

  renderQuestion(question, randIndex);
}

function startTimer() {}

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
  displayedQuestionEl.textContent = "Your final score: " + score;
  startButtonEl.disabled = false;
  startButtonEl.textContent = "Play Again";

  //reset object values to play again
  question.questions = questionsArray;
  question.answerChoices = answersArray;
  question.answerCorrect = correctArray;
}

startButtonEl.addEventListener("click", function (event) {
  startButtonEl.disabled = true;
  startQuiz();
});

answerChoices.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    answerMatch.textContent = "Correct!";
    score++;
  } else {
    answerMatch.textContent = "Wrong!";
    score--;
  }
  //clear answer buttons after making selection
  while (answerChoices.firstChild) {
    answerChoices.removeChild(answerChoices.firstChild);
  }

  console.log("current score: " + score);

  if (question.questions[0]) {
    startQuiz();
  } else {
    endQuiz();
  }
});
