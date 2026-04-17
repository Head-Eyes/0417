import { CardArea } from "./CardArea.js";
import { ResultArea } from "./ResultArea.js";

class ViewElement {
    #manager;
    #container;

    constructor (manager) {
        this.#manager = manager;
        this.#container = document.createElement("div");
        
        const title = document.createElement("h1");
        title.innerHTML = `<span class="green-bg">Igaz</span> vagy <span class="red-bg">Hamis</span>`;
        this.#container.appendChild(title);

        const contentArea = document.createElement("div");
        this.#container.appendChild(contentArea);

        this.#manager.nextQuestionCallback = (questionView) => {
            const card = new CardArea(this.#manager, questionView);
            card.replaceContent(contentArea);
        };

        this.#manager.finishCallback = (results) => {
            const resultArea = new ResultArea(this.#manager, results);
            resultArea.replaceContent(contentArea);
        };
    }

    appendTo(parent) {
        parent.appendChild(this.#container);
    }
}

class QuestionViewType {
    question;
}

export { ViewElement, QuestionViewType }