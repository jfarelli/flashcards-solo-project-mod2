const chai = require( 'chai' );
const expect = chai.expect;

const Card = require( '../src/Card' );

describe( 'Card', ( ) => {
  let card;
  beforeEach( ( ) => {
    card = new Card(
      1, 
      'What allows you to define a set of related information using key-value pairs?', 
      [ 'object', 'array', 'function' ], 
      'object'
      );
  });

  it( 'Should be a function', ( ) => {
    expect( Card ).to.be.a( 'function' );
  });

  it( 'Should be an instance of Card', ( ) => {
    expect( card ).to.be.an.instanceof( Card );
  }); 

  it( 'Should take in an ID', ( ) => {
    expect( card.id ).to.equal( 1 );
  }); 

  it( 'Should store a question', ( ) => {
    expect( card.question ).to.equal( 'What allows you to define a set of related information using key-value pairs?' );
  });  

  it( 'Should store a list of possible answers', ( ) => {
    expect( card.answers ).to.deep.equal( [ 'object', 'array', 'function' ] );
  });  

  it( 'Should store the correct answer', ( ) => {
    expect( card.correctAnswer ).to.equal( 'object' );
  });
});