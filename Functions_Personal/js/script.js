// Amber Salinas -- 27 August 2014 -- Functions_Personal

// My husband loves to use "Rock, Paper, Scissors" to determine who does the least enjoyed chores around the house. I decided to create a "Rock, Paper, Scissors" game in his honor! I made it so that the user can play against the computer.

var myChoice = prompt("Rock, Paper, or Scissors?"); // here we make a prompt for the user to make their choice

// I had to do a little bit of research for this next part. I knew I wanted the computer to choose a random number so that I could make a certain range equal to "rock," a range equal to "paper," etc. but I wasn't sure how to do it. Google led me to w3schools.com, which revealed the Math.random function.

var compChoice = Math.random(); // we create a variable for the computer to pick a random number. 

// According to w3schools, the random number will be between 0 and 1. I need to create if/else if/else statements that will define what results in rock, paper, and scissors.

if (compChoice <= 0.33) { // to keep the chances as even as possible, I broke it up into thirds. Less than or equal to .33 is "Rock"
	compChoice = "Rock";
}
else if (compChoice <= 0.66) { // less than or equal to .66 is "paper" 
	compChoice = "Paper"; 
}
else { 
	compChoice = "Scissors"; // anything greater than .66 will be "scissors" 
}

console.log("You chose " + myChoice + ", and the computer chose " + compChoice + "!"); // printing both of the choices to the console to make sure everything works so far. 

// Now for the tricky part; I need to tell the computer that paper wins over rock, scissors wins over paper, and rock wins over scissors, and also that if the choices are the same, the user and the computer tie. I know I can use a FUNCTION to compare the choices. 
 

// The easy part is telling the computer that the results are tied
var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "You've tied!"; // instead of returning a value like in the examples from the screencasts, I want to return a string instead. 
	}
	else if (choice1 === "Rock") { // I'm going to try nesting an if/else inside of the else if, because I need to say that if choice1 is rock, the computer can either win by choosing "paper" or lose by choosing "scissors."
		if (choice2 === "Scissors") {
			return "Aww, you lose!"; 
		}
		else {
			return "Yay, you win!";
		}
	}
	else if (choice1 === "Paper") { // do the same thing for "Paper". So far so good.
		if (choice2 === "Scissors") {
			return "Aww, you lose!"; 
		}
		else {
			return "Yay, you win!"; 
		}
	}
	else if (choice1 === "Scissors") { // repeat the steps one final time for "Scissors." We've now included all of the possible results!
		if (choice2 === "Rock") {
			return "Aww, you lose!"; 
		}
		else {
			return "Yay, you win!"; 
		}
	}		
} // Closing the final bracket gets rid of the syntax error, so I know it was nothing to do with nesting the else ifs. 

// Now to see if this actually works. 
compare(myChoice, compChoice); // tell the computer what parameters to compare. I need to include this AFTER the function, because it's an anonymous function. 
