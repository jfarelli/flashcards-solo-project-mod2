const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

const data = require( './data' );
const prototypeQuestions = data.prototypeData; /// Look at this for importing from sample-data <<<<<<<<<<<<<<<
const util = require( './util' );

class Game {
  constructor( ) {
    this.currentRound = { }; 
  }

  start( ) {
    const cards = prototypeQuestions.map( card => new Card( card.id, card.question, card.answers, card.correctAnswer ) );
    const deck = new Deck( cards );
    const round = new Round( deck );
    this.currentRound = round;
    this.printMessage( deck );
    this.printQuestion( round );
  }

  printMessage( deck, round ) {
    console.log( `Welcome to FlashCards! You are playing with ${ deck.countCards( ) } cards.
-----------------------------------------------------------------------`)
  }

  printQuestion( round ) {
      util.main( round );
  }
}

module.exports = Game;

