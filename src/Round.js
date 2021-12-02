const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard = deck.cards[this.turns];
        this.correctGuesses = [];
        this.incorrectGuesses = []
    };

    returnCurrentCard() {
        return this.currentCard;
    };

    takeTurn(guess) {
        let currentTurn = new Turn(guess, this.currentCard);
        currentTurn.evaluateGuess();
        currentTurn.giveFeedback();
        if (currentTurn.giveFeedback === 'incorrect!') {
            this.incorrectGuesses.push(guess);
        } else {
            this.correctGuesses.push(guess);
        }
        this.turns ++;
    };

    calculatePercentCorrect() {
        let averageCorrectGuesses = (this.incorrectGuesses.length/this.turns) * 100;
        return averageCorrectGuesses;
    };

    endRound() {
        return `** Round Over!** You answered ${calculatePercentCorrect()}% of the questions correctly!`;
    };

};


module.exports = Round;