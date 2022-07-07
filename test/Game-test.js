const chai = require( 'chai' );
const expect = chai.expect;

const Card = require( '../src/Card' );
const Deck = require( '../src/Deck' );
const Game = require( '../src/Game' );
const Round = require( '../src/Round' );
const data = require( '../src/sample-data' );


describe( 'Game', ( ) => { // something
    let card;
    let cardsInTheDeck;
    let deck;
    let game;
    let round;
    beforeEach( ( ) => {
        cardsInTheDeck = data.sampleData.map( data => data );
        card = new Card( cardsInTheDeck )
        deck = new Deck( card );
        round = new Round( deck );
        game = new Game( round );
    } );

    it( 'Should be a function', ( ) => {
        expect( Game ).to.be.a( 'function' );
    } );

    it( 'Should be an instance of Game', ( ) => {
        expect( game ).to.be.an.instanceof( Game );
    } );

    it( 'Should keep track of the current round', ( ) => {
        expect( game.currentRound ).to.be.a( 'object' );
        expect( game.currentRound ).to.deep.equal( { } );
    } );

    it.skip( 'Should start the Game', ( ) => {
        expect( game.start( ) ).to.equal( );
    } );

} )