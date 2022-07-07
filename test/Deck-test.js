const chai = require( 'chai' );
const expect = chai.expect;

const Deck = require( '../src/Deck' );
const data = require( '../src/sample-data' );

describe( 'Deck', ( ) => { // somthing
    let deck;
    let cards;
    beforeEach( ( ) => {
        cards = data.sampleData.map( data => data );
        deck = new Deck( cards );
    } );

    it( 'Should be a function', ( ) => {
        expect( Deck ).to.be.a( 'function' );
    } );

    it( 'Should be an instance of Deck', ( ) => {
        expect( deck ).to.be.an.instanceof( Deck );
    } );

    it( 'Should hold all the cards in the deck', ( ) => {
        expect( deck.cardsInDeck ).to.be.a( 'array' );
        expect( deck.cardsInDeck ).to.deep.equal( 
            [
                {
                    id: 1,
                    question: 'What allows you to define a set of related information using key-value pairs?',
                    answers: [ 'object', 'array', 'function' ],
                    correctAnswer: 'object'
                },
                {
                    id: 2,
                    question: 'What is a comma-separated list of related values?',
                    answers: [ 'array', 'object', 'function' ],
                    correctAnswer: 'array'
                },
                {
                    id: 3,
                    question: 'What type of prototype method directly modifies the existing array?',
                    answers: [ 'mutator method', 'accessor method', 'iteration method' ],
                    correctAnswer: 'mutator method'
                },
                {
                    id: 4,
                    question: 'What type of prototype method does not modify the existing array but returns a particular representation of the array?',
                    answers: [ 'mutator method', 'accessor method', 'iteration method' ],
                    correctAnswer: 'accessor method'
                },
                {
                    id: 5,
                    question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
                    answers: [ 'mutator method', 'accessor method', 'iteration method' ],
                    correctAnswer: 'iteration method'
                }
            ]
        )
    } );

    it( 'Should know how many cards are in the deck', ( ) => {
        expect( deck.countCards( ) ).to.equal( 5 )
    } )

} )