// Amber Salinas -- 21 Aug 2014 -- Conditionals (Wacky)

// How far will you fall in 'x' seconds? 

var time = prompt("How long are you falling?"); // get the time from the user
// the formula is d = 1/2 * 9.8t^2, so we need to define variables for the rest of the equation. 
const grav = .5; // we use .5 instead of 1/2 
const a = 9.8; // the constant for gravity

var timeGrav = .5 * a; // part one of the equation.  
var gravTime = time * time; // part two
var distance = timeGrav * gravTime; // final total