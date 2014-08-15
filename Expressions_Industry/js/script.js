// Amber Salinas -- 14 August 2014 -- Expressions (Industry)

// In the Army (my current profession), Soldiers are required to pass certain height, weight, and body-fat percentage standards. 

alert("Calculate your Body Mass Index."); // create an alert for what the user is about to do

var weight = prompt("What is your weight in pounds?"); // obtain user's weight in pounds
console.log("Weight: " + weight + "lbs."); // print the result to the console.

var height = prompt("What is your height in inches?"); // obtain user's height in inches
console.log("Height: " + height + "in.");

// to calculate BMI, we must divid weight by height^2, and then multiply that by a conversion factor of 703.

var heightSquared = height * height; // finding height squared so that we can complete the rest of the formula

const conversion = 703; // create a constant for the conversion factor, since this never changes.

var bmi = (weight / heightSquared) * conversion;