const Turn = require( './Turn' );

class Round {
    constructor( deck ) {
        this.deck = deck.cardsInDeck; // something
        this.turns = 0;
        this.incorrectGuesses = [ ];
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
        console.log( `** Round over! ** You answered ${ this.calculatePercentCorrect( ) }% of the questions correctly! **` );
    }
}

module.exports = Round;
