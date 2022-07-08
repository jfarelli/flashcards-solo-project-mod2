# FlashCards! 

## A Q&A game to play through your terminal!


## Setup

* Click on the "Fork" button on the top right corner of the page.

* Clone down the forked repo from your GitHub.

* After it's cloned, `cd` into the directory and run `npm install` to install the library dependencies.

* Then, run `node index.js` to start the game!

* A welcome message will greet you and let you know that you'll be playing with 30 cards!

* To select an answer, use the up and down arrows, or the numbers on your keyboard and then hit the enter key!

* You'll then be promted if your answer was 'correct', or 'incorrect'!

* The game will end if the accuracy is above 90%, but will restart if the accuracy drops below 90%.

* If you would like to quit the game at any point, type `ctrl + c` on your keyboard to exit.

* Enjoy!


**GAMEPLAY**

https://user-images.githubusercontent.com/97558758/178031725-05d01b61-adfd-4a44-b828-7104eaea713b.mov


**ABOVE 90% ACCURACY**

https://user-images.githubusercontent.com/97558758/178032090-fb606185-bb54-4f52-9f93-c8e8aa34d59d.mov


**BELOW 90% ACCURACY**

https://user-images.githubusercontent.com/97558758/178032037-7543e336-a214-4d97-bdb1-54752a2ac363.mov


<details>
<summary>Project Details</summary>
<br>


The FlashCards game runs by integrating five different class files to accomplish one goal.
I worked with and wrote **Card**, **Turn**, **Deck**, **Round**, and **Game** class files, each of which have their accompanying testing files.

* **Card** class:
    
    * Handles the basic deck, setting up the `id`, `question`, `answers`, and `correctAnswers` key values in the class constructor.

* **Turn** class:

    * Functionality:
        * `returnGuess( )` returns the players guess. 
        * `returnCard( )` returns the `currentCard` being played.
        * `evaluateGuess( )` compares the players `guess` against the correct answer of the `currentCard.correctAnswer`, in which the `correctAnswer` stems from the **Card** class.
        * `giveFeedback( )` invokes the `evaluateGuess( )` function to let the player know if the guess is 'correct!', or 'incorrect!' while playing the game.
   
* **Deck** class:

    * Holds `cardsInDeck` within it's constructor.
    
    * Funcionality:
        
        * The `countCards( )` method which returns the `cardsInDeck.length` to know how many cards it has in the deck.

* **Round** class:

    * Holds the `deck`, which takes in the `cardsInDeck`, a counter to increment `turns`, and stores `incorrectGuesses` by `id` into an array.

    * Functionality:

        * `returnCurrentCard( )` returns the current card being played by looking at `deck`, linking the `turns` to know what card it should be on.
        * `takeTurn( )` 
            * Takes in a `guess` parameter, which is also a parameter when a new **Turn** is instantiated, along with invoking `returnCurrentCard( )`. 
            * The method then evaluates whether a guess is either correct, or incorrect. 
            * If a guess is incorrect, it's placed (by id) into the `incorrectGuesses` array, the `turns` counter is increased by 1, and feedback is given if the question was guessed 'correct!', or 'incorrect!'.
        * `calculatePercentCorrect( )` calculates the percentage of correct guesses and then is used to display the percentage correct once the round is completed.
        * `endRound( )` 
            * If the accuracy of questoins answered correctly is above 90%, and promt will display congratulating you and the game will end.
            * If the accuracy drops below 90%, then you will be prompted to 'Give it another shot' and the game will reset.

* **Game** class:

    * Holds the `currentRound` object in its constructor.

    * Functionality:

        * `start( )`: 
            * Takes in a variable that uses `.map( )` to look through the object array within the *data.js* file of all the cards stored. 
            * It then creates **Cards**, puts those **Cards** in a **Deck**, and then creates a new **Round** using that **Deck**. 
            * This function also takes in the `printMessage( )` & `printQuestion( )` functions.
        * `printMessage( )` simply prints the opening message when the game is started.
        * `printQuestion( )` displays the question in your terminal.

* **index.js**:
    * This is where it all comes together in the end...and where it begins! 
    * This is where I instantiate a new **Game** and run the `game.start( )` funtion to get this game rolling!
</details>


### Challenges & Reflection:
As a Mod 2 repeater, this was my 2nd go'round with this project, and it probably gave me just a little less trouble than the first time...just a little.
No matter the struggles I faced on this project, it's really nice to reflect that I'm grasping these concepts more and more.
Going into this project for the 2nd tiem, I really thought I could hammer through it with ease, but I was sorely mistaken.
This project, and the concepts within, proved to be a challenge day after day. Running into errors, forgetting that I commented something out which triggered another error, writing and passing tests ( and getting that satisfying green check mark ), and so on...
All in all, it was another great round on this project to get these concepts a little more solidified in my head.


### Future Iterations:
**Add a game timer**
* At the end of the game, report how much time it took to complete the game (in minutes and seconds).

**Add functionality to check your incorrect answers**
* I'd like to look into functionality that doesn't end the game after the deck is complete, but goes through the incorrect guesses, so that the user can second-chance their efforts.


<br>

**Technologies used:**<br>
JavaScript<br>
Mocha<br>
Chai<br>


<br>


 
**Jordan Farelli:** [LinkedIn](https://www.linkedin.com/in/jordan-farelli/) | [GitHub](https://github.com/jfarelli) 