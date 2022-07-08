const Turn = require( './Turn' );
const Game = require( './Game' );

class Round {
    constructor( deck, game ) {
        this.deck = deck.cardsInDeck;
        this.turns = 0;
        this.incorrectGuesses = [ ];
        this.game = game;
    }

    returnCurrentCard(  ) {
        return this.deck[ this.turns ];
    }

    takeTurn( guess ) {
        let turn = new Turn( guess, this.returnCurrentCard( ) );
        if ( !turn.evaluateGuess( ) ) {
            this.incorrectGuesses.push( turn.currentCard.id );
            this.deck.push( this.deck.shift( ) );
        }
        this.turns++
        return turn.giveFeedback( );
    }

    calculatePercentCorrect( ) {
        let correctGuesses = this.deck.length - this.incorrectGuesses.length
            correctGuesses = ( correctGuesses / this.deck.length ) * 100
            return Math.round( correctGuesses )
    }

    endRound( ) {      
        if ( this.calculatePercentCorrect( ) > 90 ) {
            console.log( `** GONGRATULATIONS! ** You answered ${ this.calculatePercentCorrect( ) }% of the questions correctly! Nice Work!**` );
        } else {
            console.log( `** UH, OH! ** You only answered ${ this.calculatePercentCorrect( ) }% of the questions correctly...Give it another shot! **` );
            this.game.start( );
        }
    }
}

module.exports = Round;
