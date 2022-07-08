const chai = require( 'chai' );
const expect = chai.expect;

const Card = require( '../src/Card' );
const Deck = require( '../src/Deck' );
const Game = require( '../src/Game' );
const Round = require( '../src/Round' );
const data = require( '../src/sample-data' );

describe( 'Game', ( ) => { 
    let cards;
    let deck;
    let round;
    let game;
    beforeEach( ( ) => {
        cards = new Card( data.sampleData.map( data => data ) )
        deck = new Deck( cards );
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

    // it.skip( 'Should start the Game', ( ) => {
    //     expect( game.start( ) ).to.equal( );
    // } );

} )