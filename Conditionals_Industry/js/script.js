// Amber Salinas -- 14 August 2014 -- Expressions (Industry)

// A simple script to determine whether you meet the minimum requirements to pass the Army Physical Fitness Test. The "maximum" score is a 300 (100% in each event), though you can score on an extended scale if you exceed 100% in each event.

// The Army requires that you achieve a 60% in each event - pushups, situps, and the 2-mile run. Anything below 60% is a failing score. We will use this script to determine whether the user passed, what their total score is, and whether they are on the extended scale. 

var puScore = prompt("What is your percentage score for pushups?"); // we are assuming the user knows their score. 

if (puScore == ""){
	var puScore = prompt("Please enter your pushup score!"); // make sure we get the user's pushup score!
}else {
	console.log("Pushups: " + puScore + "%");
}

// let's check to make sure the user has passed their pushups.
if (puScore < 60){
	console.log("Unfortunately, you did not pass your pushups.");
}else{
	console.log("You passed your pushups!");
} 

var suScore = prompt("What is your percentage score of situps?"); // asking for the user's situp percentage

if(suScore == ""){
	var suScore = prompt("Please enter your situp score!"); // we need the user's situp score to finish the script
}else {
	console.log("Situps: " + suScore + "%"); 
}

// check to see if the user has passed their situps. 
if (suScore < 60){
	console.log("Unfortunately, you have not passed your situps."); 
}else{
	console.log("You passed your situps!");
}


var runScore = prompt("What is your run percentage?"); // find the user's run percentage

if(runScore == ""){
	var runScore = prompt("Please enter your run score!"); // validate that the user has input a run score
}else{
	console.log("Run: " + runScore + "%"); 
}

// check to see if the user has passed their run. 
if(runScore < 60){
	console.log("Unfortunately, you have no passed your run."); 
}else{
	console.log("You have passed your run!"); 
}

// create a variable to check for the user's total score
var totalScore = parseInt (puScore) + parseInt (suScore) + parseInt (runScore); 
console.log("Your total score is " + totalScore + "!"); // print the result to the console

// now let's use a ternary operator to determine whether the user has scored on the extended scale. 
(totalScore > 300) ? console.log("Congratulations, you scored on the extended scale!") : console.log("You have not scored on the extended scale.")

