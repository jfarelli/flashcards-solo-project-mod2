const chai = require( 'chai' );
const expect = chai.expect;

// const Card = require('../src/Card');
const Deck = require( '../src/Deck' );
const data = require( '../src/sample-data' );

describe( 'Deck', ( ) => {
    let deck;
    let cards;
    beforeEach( ( ) => {
        cards = data.sampleData.map( data => data  );
        deck = new Deck( cards );
    } );

    it( 'Should be a function', ( ) => {
        expect( Deck ).to.be.a( 'function' );
    } );

    it( 'Should be an instance of Deck', ( ) => {
        expect( deck ).to.be.an.instanceof( Deck );
    } );

    it( 'Should hold all the cards', ( ) => {
        expect( deck.cardsInDeck ).to.be.a( 'array' );
        expect( deck.cardsInDeck)
    } );

    it( 'Should know how many cards are in the deck', ( ) => {
        expect( deck.countCards( ) ).to.equal( 5 )
    } )

} )