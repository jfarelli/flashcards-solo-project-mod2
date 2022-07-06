const chai = require( 'chai' );
const expect = chai.expect;

const Card = require( '../src/Turn' );
const Turn = require( '../src/Turn' );

describe( 'Turn', ( ) => {
    let card1;
    let card2;
    let turn1;
    let turn2;
    beforeEach( ( ) => {
        turn1 = new Turn( 'function', card1 );
        turn2 = new Turn( 'array', card2 );

        card1 = new Card( 
            1, 
            'What allows you to define a set of related information using key-value pairs?', 
            [ 'object', 'array', 'function' ], 
            'object'
            );
        card2 = new Card( 
            2,
            "What is a comma-separated list of related values?",
            [ "array", "object", "function" ],
            "array"
            );
    } );

    it( 'Should be a function', ( ) => {
        expect( Turn ).to.be.a( 'function' );
    } );

    it( 'Should be an instance of Turn', ( ) => {
        expect( turn1 ).to.be.an.instanceof( Turn );
        expect( turn2 ).to.be.an.instanceof( Turn );
    } );

    it( 'Should take in a User\'s guess', ( ) => {
        expect( turn1.guess ).to.be.a( 'string' );
        expect( turn1.guess ).to.equal( 'function' );

        expect( turn2.guess ).to.be.a( 'string' );
        expect( turn2.guess ).to.equal( 'array' );        
    } );

    it( 'Should know the currentCard being played', ( ) => {
        expect( turn1.currentCard ).to.deep.equal( card1 );
        expect( turn2.currentCard ).to.deep.equal( card2 );
    } );

    it( 'Should return the User\'s guess', ( ) => {
        expect( turn1.returnGuess( ) ).to.equal( 'function' );
        expect( turn2.returnGuess( ) ).to.equal( 'array' );
    } );

    it( 'Should return a card', ( ) => {
        expect( turn1.returnCard( card1 ) ).to.equal( card1 );
        expect( turn2.returnCard( card2 ) ).to.equal( card2 );
    } );

    it( 'Should know if the answer is correct', ( ) => {
        expect( turn1.evaluateGuess( ) ).to.equal( false );
        // expect( turn2.evaluateGuess( ) ).to.equal( true );
    } );

    it( 'Should give feedback on the guess', ( ) => {
        expect( turn1.giveFeedback( turn1.evaluateGuess( ) ) ).to.equal( 'incorrect!' );
        // expect( turn2.giveFeedback( turn2.evaluateGuess( ) ) ).to.equal( 'correct!' );
    } )
} )