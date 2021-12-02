const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

        let round = null;
        let card1 = null;
        let card2 = null;
        let card3 = null;

        beforeEach(function() {
            card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
            card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
            card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

            deck = new Deck([card1, card2, card3]);

            round = new Round(deck);
    });

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should have a method that returns current card', function() {
        
        round.returnCurrentCard();

        expect(round.returnCurrentCard()).to.equal(card1);
    });
    it('should keep track of turn and create a new instance of turn', function() {

        round.takeTurn(2015);
        
        // expect(round.currentCard).to.equal(card2);
        expect(currentTurn).to.be.instanceOf(Turn);
        
        round.takeTurn(2015);
        
        expect(round.currentCard).to.equal(card3);
    })
        
});