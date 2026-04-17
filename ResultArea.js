import { PlayArea } from "./PlayArea.js";

class ResultArea extends PlayArea {
    /**
     * @param {SelectManager} manager 
     * @param {QuestionResultViewType[]} results 
     */
    constructor(manager, results) {
        super(manager);

        let correctAnswers = 0;

        results.forEach(result => {
            const p = document.createElement("p");
            p.textContent = `${result.question} Helyes válasz ${result.rightAnswer ? 'igaz' : 'hamis'}`;
            
            if (result.selected === result.rightAnswer) {
                p.className = "green-bg";
                correctAnswers++;
            } else {
                p.className = "red-bg";
            }
            
            this.div.appendChild(p);
        });

        const resultText = document.createElement("p");
        resultText.textContent = `${results.length}/${correctAnswers} helyes`;
        this.div.appendChild(resultText);

        const buttonReset = document.createElement("button");
        buttonReset.textContent = "Újra";
        buttonReset.addEventListener("click", () => this.manager.reset());
        this.div.appendChild(buttonReset);
    }
}

export { ResultArea };