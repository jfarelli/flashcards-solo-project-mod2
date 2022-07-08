const Turn = require( './Turn' );
const Game = require( './Game' );


class Round {
    constructor( deck ) {
        // console.log( 'DECK: ', deck )
        this.deck = deck.cardsInDeck;
        // console.log( 'THIS.DECK: ', this.deck )
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
        console.log( `** Round over! ** You answered ${ this.calculatePercentCorrect( ) }% of the questions correctly! **` )
        
        // if ( this.calculatePercentCorrect( ) > 90 ) {
        //     console.log( `** GONGRATULATIONS! ** You answered ${ this.calculatePercentCorrect( ) }% of the questions correctly! Nice Work!**` );
        //     this.endRound( )
        // } else {
        //     console.log( `** UH, OH! ** You answered ${ this.calculatePercentCorrect( ) }% of the questions correctly...Give it another shot! **` );
        //     // let game = new Game( );
        //     // game.start( )
        // }
    }
}

module.exports = Round;
