const chai = require( 'chai' );
const expect = chai.expect;

const Card = require( '../src/Card' );
const Deck = require( '../src/Deck' );
const Round = require( '../src/Round' );
const Turn = require( '../src/Turn' );
const data = require( '../src/sample-data' );

// describe( 'Round', ( ) => { //
//     let card;
//     let round;
//     // let turn;
//     beforeEach( ( ) => {
//         card = data.sampleData.map( data => data );
//         let cards = new Card( card )
//         // card = new Card( data.sampleData.map( data => data ) );
//         round = new Round( cards );
//         // console.log( 'ROUND: ', round )
//         // turn = new Turn(  );
//         // console.log( 'TURN: ', turn )
//     } );

    describe( 'Round', ( ) => {
        let card1;
        let card2;
        let card3;
        let card4;
        let card5;
        let deck;
        let round;
        beforeEach( ( ) => {
            card1 = new Card(
                1,
                "What allows you to define a set of related information using key-value pairs?",
                [ "object", "array", "function" ],
                "object"
            );
            card2 = new Card(
                2,
                "What is a comma-separated list of related values?",
                [ "array", "object", "function" ],
                "array"
            );
            card3 = new Card(
                3,
                "What type of prototype method directly modifies the existing array?",
                [ "mutator method", "accessor method", "iteration method" ],
                "mutator method"
            );
            card4 = new Card(
                4,
                'What type of prototype method does not modify the existing array but returns a particular representation of the array?',
                [ 'mutator method', 'accessor method', 'iteration method' ],
                'accessor method'
            );
            card5 = new Card(
                5,
                'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
                [ 'mutator method', 'accessor method', 'iteration method' ],
                'iteration method'
            );
            deck = new Deck( [ card1, card2, card3, card4, card5 ] );
            round = new Round( deck );
    });

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

    it( 'Should return the current card being played', ( ) => {
        expect( round.returnCurrentCard(  ) ).to.be.a( 'object' );
        expect( round.returnCurrentCard(  ) ).to.equal( card1 );
    } );

    it( 'Should update the turn count', ( ) => {
        round.takeTurn( 'object' )
        expect( round.turns ).to.equal( 1 );
    } );

    it( 'Should evaluate the user\'s guess', ( ) => {
        expect( round.takeTurn( 'array' ) ).to.equal( 'incorrect!' );
    } );

    it( 'Should give feedback to the user', ( ) => {
        expect( round.takeTurn( 'array' ) ).to.equal( 'incorrect!' );
    } );

    it( 'Should store incorrectGuesses by id', ( ) => {
        round.takeTurn( 'array' );
        expect( round.incorrectGuesses ).to.deep.equal( [ 1 ] );
    } );

    it( 'Should calculate the percentage of correct answers', ( ) => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('accessor method')
        round.takeTurn('iteration method')
        round.takeTurn('mutator method')
        expect( round.calculatePercentCorrect( ) ).to.equal( 60 );
    } );

    // it.skip( 'Should print a message at the end of the round', ( ) => {
    //     expect( round.endRound( ) ).to.equal( `** Round over! ** You answered 60% of the questions correctly! **` );
    // } );

} )