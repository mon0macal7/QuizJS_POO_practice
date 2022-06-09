export class Question {
  //Estas son las propiedades, guardan la información del objeto
  /**
   *
   * @param {string} text texto de la preguntas
   * @param {string[]} choices las opciones de las preguntas
   * @param {string} answer respuesta
   */
  constructor(text, choices, answer) {
    //constructor es un método para crear objetos nuevos, recibe parámetros

    this.text = text; //this hace referencia al objeto que se esta creando
    this.choices = choices;
    this.answer = answer;
  }
  /**
   *
   * @param {string} choice
   * @returns {boolean} return true if the answer is correct
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

// Con "new" instanciamos nuestra clase:
const question = new Question();
