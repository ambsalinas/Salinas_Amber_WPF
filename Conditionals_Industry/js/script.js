// Amber Salinas -- 14 August 2014 -- Expressions (Industry)

// A simple script to determine whether you meet the minimum requirements to pass the Army Physical Fitness Test. The "maximum" score is a 300 (100% in each event), though you can score on an extended scale if you exceed 100% in each event.

// The Army requires that you achieve a 60% in each event - pushups, situps, and the 2-mile run. Anything below 60% is a failing score.

var puScore = prompt("What is your percentage score for pushups?"); // we are assuming the user knows their score. 

if (puScore == ""){
	var puScore = prompt("Please enter your pushup score!"); // make sure we get the user's pushup score!
}else {
	console.log("Pushups: " + puScore + "%");
}