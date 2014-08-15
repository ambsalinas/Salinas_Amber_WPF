// Amber Salinas -- 14 Aug 2014 -- Expressions (Wacky)

// Calculate your Basal Caloric Needs (how many calories you need just to survive)

alert("Let's calculate your Basal Caloric Needs!"); // an alert to let users know what we are doing

var weight = prompt("Your weight in pounds:"); // obtain user's weight
var basicNeedsMale = weight * 11; 
var basicNeedsFemale = weight * 10; // find basic needs without any activity for both males and females 

console.log("Your basic caloric needs without any physical activity is " + basicNeedsMale + " calories if you are male, and " + basicNeedsFemale + " calories if you are female."); 

var activity = prompt("What is your activity level? \n20%: Sedentary, a lot of sitting, driving, or sleeping. \n30%:Light activity <2 hours a day. \n40%:Moderate exercise with little time spent sitting. \n50%:Very active in sports or exercise, or involved in an intensive-labor job such as construction."); // find out how active the user is
var activeNeedsMale = basicNeedsMale * (activity *.01); 
var activeNeedsFemale = basicNeedsFemale * (activity *.01); // find active caloric needs for men and women. multiply activity by .01 to get the percentage.

console.log("Your additional caloric needs with your level of physical activity are " + activeNeedsMale + " calories if you are male, and " + activeNeedsFemale + " calories if you are female."); 

const food = .10; // constant for digesting food
var foodNeedsMale = (basicNeedsMale + activeNeedsMale) * food; 
var foodNeedsFemale = (basicNeedsFemale + activeNeedsFemale) * food; // calculate the calories needed to digest food by adding basic and active needs, then multiplying that by 10%.

console.log("You require " + foodNeedsMale + " calories to digest food if you are male, and " + foodNeedsFemale + " calories to digest food if you are female."); // print the result to the console.

var basalCaloricNeedsMale = [basicNeedsMale, activeNeedsMale, foodNeedsMale]; 
var basalCaloricNeedsFemale = [basicNeedsFemale, activeNeedsFemale, foodNeedsFemale]; // create an array for the results so far.