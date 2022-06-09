//@ts-check

import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { Interfaz } from "./models/interfaz.js";

/**
 *
 * @param {Quiz} quiz
 * @param {Interfaz} ui
 */
const renderPage = (quiz, ui) => {
  if (quiz.isFinished()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  }
};
function main() {
  const quiz = new Quiz(questions);
  const ui = new Interfaz();

  renderPage(quiz, ui);
}

main();
