const Turn = require( './Turn' );

class Round {
    constructor( deck ) {
        this.deck = deck;
        // console.log( 'DECK: ', deck )
        this.turns = 0;
        this.incorrectGuesses = [ ];
    }

    // returnCurrentCard: method that returns the current card being played
    returnCurrentCard(  ) {
        return this.deck[ this.turns ]
        // let turn = new Turn(  )
        // // console.log( '14: ', turn.returnCard( currentCard[ this.turns ] ) )
        // return turn.returnCard( currentCard[ this.turns ] )
    }

    // takeTurn: method that updates turns count, evaluates guesses, 
    // gives feedback, and stores ids of incorrect guesses
    takeTurn( guess ) {
        let turn = new Turn( guess, this.returnCurrentCard( ) );
        // console.log( 'GUESS: ', guess )
        if ( !turn.evaluateGuess( ) ) {
            // console.log( 'TURN.CURRENTCARD.ID: ', turn.currentCard.id )
            this.incorrectGuesses.push( turn.currentCard.id );
            this.deck.push( this.deck.shift( ) );
        }
        this.turns++
        return turn.giveFeedback( );
    }

    // calculatePercentCorrect: method that calculates and returns 
    // the percentage of correct guesses
    calculatePercentCorrect( ) {
        // setup a correct guess variable
        // subtract the decks length from the incorrectGuesses length
        let correctGuesses = this.deck.length - this.incorrectGuesses.length
        // once the correct guesses are established divide by the deck length
        // and * by 100 to get percentage
        correctGuesses = ( correctGuesses / this.deck.length ) * 100
        // console.log( 'CORRECTGUESSES: ', correctGuesses  )
        // return a whole number, so there's no decimals
        return Math.round( correctGuesses )
    }

    // endRound: method that prints the following to the console: 
    // ‘** Round over! ** You answered <>% of the questions correctly!’
    endRound( ) {
        console.log( `** Round over! ** You answered ${ this.calculatePercentCorrect( ) }% of the questions correctly! **` );
    }
}

module.exports = Round;

// Your Round class will be the object that takes in responses and records these guesses 
// (as well as if they are correct or incorrect). 

// The currentCard should be the first Card in the 
// Deck (the array of Cards) at the start of the Round

// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.

// The turns count is updated, regardless of whether the guess is correct or incorrect

// The next card becomes current card

// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses

// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’