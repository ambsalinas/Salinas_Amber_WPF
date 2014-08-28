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

compare(myChoice, compChoice); // this is what I need to compare. I need to get this inside of a function. 

// The easy part is telling the computer that the results are tied
var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "You've tied!"; 
	}
}