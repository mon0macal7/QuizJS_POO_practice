export class Interfaz {
  constructor() {}

  /**
   *
   * @param {string} text pintar pregunta
   */

  //metodo para pintar la pregunta
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }
  /**
   *
   * @param {string[]} choices metodo para crear las opciones
   */

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerHTML = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));
      choicesContainer.append(button);
    }
  }
  /**
   *
   * @param {number} score total score
   */
  showScores(score) {
    const quizEndHTML = `<h1>Result</h1>
    <h2>Your Score: ${score}</h2>
            
        `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }
  /**
   *
   * @param {number} currentIndex the current index of the quiz
   * @param {number} total resultado
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex}of ${total}`;
  }
}
