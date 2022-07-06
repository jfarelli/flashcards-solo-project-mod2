class Turn {
    constructor( guess, currentCard ) {
        this.guess = guess;
        this.currentCard = currentCard;
    }

    returnGuess ( ) {
        return this.guess;
    }
    
    returnCard ( currentCard ) {
        return currentCard
    }

    evaluateGuess ( ) {
        return this.guess === this.currentCard.correctAnswer;
    }

    giveFeedback ( ) {
        return this.evaluateGuess( ) ? 'correct!' : 'incorrect!'
        // if ( this.evaluateGuess( ) ) {
        //     return 'correct!'
        // } else if( !this.evaluateGuess( ) ) {
        //     return 'incorrect!'
        // }
    }
}




module.exports = Turn;









