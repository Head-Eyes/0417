import { QuestionViewType } from "./ViewElement.js";

class SelectManager {
    #questionNumber;
    #questions;
    #questionAnswers;
    #nextQuestionCallback;
    #finishCallback;

    constructor (questions) {
        this.#questions = questions;
        this.#questionAnswers = [];
        this.#questionNumber = 0;
    }

    play () {
        this.#dispatchNextQuestion();
    }

    reset () {
        this.#questionAnswers = [];
        this.play();
    }
    
    nextQuestion (answer) {
        this.#questionAnswers.push(answer);

        if (this.#questionAnswers.length === this.#questions.length) {
            let questionResults = [];

            for (let i = 0; i < this.#questions.length; i++) {
                let result = new QuestionResultViewType();
                result.question = this.#questions[i].question;
                result.selected = this.#questionAnswers[i];
                result.rightAnswer = this.#questions[i].valid;
                questionResults.push(result);
            }

            this.#finishCallback(questionResults);
        } else {
            this.#dispatchNextQuestion();
        }
    }

    #dispatchNextQuestion() {
        let nextQ = new QuestionViewType();
        nextQ.question = this.#questions[this.#questionAnswers.length].question;
        this.#nextQuestionCallback(nextQ);
    }

    set nextQuestionCallback (value) {
        this.#nextQuestionCallback = value;
    }

    set finishCallback (value) {
        this.#finishCallback = value;
    }
}

class QuestionType {
    question;
    valid;
}

class QuestionResultViewType {
    question;
    selected;
    rightAnswer;
}

export { SelectManager, QuestionType, QuestionResultViewType }