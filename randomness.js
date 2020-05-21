/**********
TITLE: Randomness
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Randomness Lab
ORIGINALLY CREATED ON: 4 Feb 2019
LAST MODIFIED ON: 4 Feb 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function(){
    /*
	guessGame - creats a guess game object using the constructor function:
    Parameters: rank: rank of each ship crew member who is playing the game
                guess: number guessed by each crew member
                phrase: crew member's words
                id: their html id
	Returns: none
    */
    
    function guessGame(rank, guess, phrase, id) {
		//Properties
		this.strRank = rank;
		this.intGuess = guess;
		this.strPhrase = phrase;
		this.elOutput = document.getElementById(id);
		
		//Methods
        //randomNumber: selects a random number between 1 and 10 and display it
        //return value: secretNumber - to access this number outside the function for a unique captain number everytime
		this.randomNumber = function() {
            var secretNumber = Math.floor(Math.random() *10) + 1;
            this.intGuess = secretNumber;
            this.strPhrase = this.strRank + " guesses the number " + secretNumber.toString();
            return secretNumber;
		}; //end randomNumber
		
		//speak: sends strPhrase to elOutput
		this.speak = function() {
			this.elOutput.textContent = this.strPhrase;
		}; //end speak
		
	}; //end guessGame
			
	//Instantiating the Object
	var theCaptain = new guessGame("Captain", 5, "I be thinkin' o' a number between 1 'n 10. Let's see who can guess it correctly for a bottle o\' grog!", "captain");
	var pirateOne = new guessGame("First Mate", 2, "I am the First Mate of this ship", "pirate1");
	var pirateTwo = new guessGame("Second Mate", 7, "I am the Second Mate of this ship", "pirate2");
	var pirateThree = new guessGame("Third Mate", 4, "I am the Third Mate of this ship", "pirate3");
    
    //Accessing the object
	theCaptain.speak();   
	pirateOne.randomNumber();
	pirateOne.speak();
	pirateTwo.randomNumber();
	pirateTwo.speak();
	pirateThree.randomNumber();
    pirateThree.speak();
    
    //announcing the captain's fav number by changing the value of strPhrase and using speak() function
	theCaptain.elOutput = document.getElementById("captainTwo");
	theCaptain.strPhrase = "My favorite number was " + theCaptain.randomNumber().toString();
	theCaptain.speak();
	
	//create an if else statements to decide the winner if there is one
	theCaptain.elOutput = document.getElementById("captainThree");	
	if (pirateOne.intGuess == theCaptain.intGuess ) {
        theCaptain.strPhrase = "I announce th' winner t' be First Mate!";
        theCaptain.speak();
    } 
    else if (pirateTwo.intGuess == theCaptain.intGuess) {
        theCaptain.strPhrase = "I announce th' winner t' be Second Mate!";
        theCaptain.speak();
    } 
    else if (pirateThree.intGuess == theCaptain.intGuess) {
        theCaptain.strPhrase = "I announce th' winner t' be Third Mate!";
        theCaptain.speak();
    }
    else {
        theCaptain.strPhrase = "None o' ye guessed me number - Arghhh!";
        theCaptain.speak();
    };		

}); 

