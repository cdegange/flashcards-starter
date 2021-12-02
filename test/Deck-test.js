const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

    let deck;

    beforeEach(function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    });

    it('should be a function', function() {
       
        expect(Deck).to.be.a('function');
    });
    
    it('should be an array of card objects', function() {

        expect(deck.cards).to.be.a('array');
    })

    it('should keep track of number of cards in the deck', function() {
        expect(deck.totalCards).to.equal(3);
    });
});