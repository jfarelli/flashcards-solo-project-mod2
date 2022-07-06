const chai = require( 'chai' );
const expect = chai.expect;

// const Card = require('../src/Card');
const Round = require( '../src/Round' );
const data = require( '../src/sample-data' );

describe( 'Round', ( ) => {
    let round;
    let cards;
    beforeEach( ( ) => {
        cards = data.sampleData.map( data => data );
        round = new Round( cards );
    } );

    it( 'Should be a function', ( ) => {
        expect( Round ).to.be.a( 'function' );
    } );

    it( 'Should be an instance of Round', ( ) => {
        expect( round ).to.be.an.instanceof( Round );
    } );

    it( 'Should hold the deck', ( ) => {
        expect( round.deck ).to.be.a( 'array' );
        expect( round.deck ).to.deep.equal( 
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
        );
    } );

    it( 'Should start with no turns taken', ( ) => {
        expect( round.turns ).to.equal( 0 );
    } );

    it( 'Should store incorrectGuesses in an array', ( ) => {
        expect( round.incorrectGuesses ).to.be.a( 'array' );
        expect( round.incorrectGuesses ).to.deep.equal( [ ] );
    } );


} )