// refer to student section 26 for JS logic
var startButtonEl = document.querySelector(".start-button");
var displayedQuestionEl = document.querySelector(".displayed-question");
var answerChoices = document.querySelector(".answer-choices");
var score = 0;
var questionsArray = [
  "What is the bestagon?",
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

// event listener for game start
// function to create random question and answers document.createElement("'element_name'")
// store index of random question to get correct answers
// event listener for answer selection
// check if answer matches correct answer array
// display correct/incorrect under next question and answers
// end game after all questions, event listener to save high score
//

function startQuiz() {}

function endQuiz() {}

function renderQuestion(questionObject, index) {
  var renderedQuestion = questionsObject.questions[index];
  //   var option = document.
}

startButtonEl.addEventListener("click", function (event) {
  console.log("start");
  startButtonEl.disabled = true;
  startQuiz();
});
