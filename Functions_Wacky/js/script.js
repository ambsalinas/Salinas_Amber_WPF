// Amber Salinas -- 27 August 2014 -- Functions_Wacky

// A well-trained athlete could have a resting heart rate of 40 beats-per-minute or less. Let's create a simple function to determine how many times an athlete's heart may beat in 1 day at 40bpm.

var beatsPerDay = calcPerDay(40, 1440); // call the results of the function inside the variable beatsPerDay, using predefined parameters of 40, for 40 bpm, and 1440, for 1,440 minutes in one day.

console.log("A well-trained athlete's heart might beat at 40bpm, which is " + beatsPerDay + " beats per day!"); // print the results

function calcPerDay(bpm, minutes){ // define the function and its parameters
    var beatsPerDay = bpm * minutes; // the code to be executed
    return beatsPerDay; // return the result!
}
// Now let's figure out how many times an athlete's heart might beat in x number of days (input by user).

var days = prompt("Enter number of days."); // prompt the user for the number of days they'd like to use
var minutes = 1440 * days; // multiply number of days by 1440 to figure out the total number of minutes
var beats = calcDays(minutes, 40); // assign the results of the function to a variable, using the results of minutes and '40' as the standard bpm for the parameters.
console.log("An athlete's heart will beat " + beats + " times in " + days + " days at 40bpm.");