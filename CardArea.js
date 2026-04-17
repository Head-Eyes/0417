import { PlayArea } from "./PlayArea.js";

class CardArea extends PlayArea {
    /**
     * @param {SelectManager} manager 
     * @param {QuestionViewType} questionView 
     */
    constructor(manager, questionView) {
        super(manager);
        const buttonTrue = document.createElement("button");
        buttonTrue.textContent = questionView.question;
        buttonTrue.className = "card-true";
        buttonTrue.addEventListener("click", () => this.manager.nextQuestion(true));

        const buttonFalse = document.createElement("button");
        buttonFalse.textContent = questionView.question;
        buttonFalse.className = "card-false";
        buttonFalse.addEventListener("click", () => this.manager.nextQuestion(false));

        this.div.appendChild(buttonTrue);
        this.div.appendChild(buttonFalse);
    }
}

export { CardArea };