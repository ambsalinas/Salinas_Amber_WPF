// Amber Salinas -- 14 Aug 2014 -- Expressions (Wacky)

// Calculate your Basal Caloric Needs (how many calories you need just to survive)

alert("Let's calculate your Basal Caloric Needs!"); // an alert to let users know what we are doing

var weight = prompt("Your weight in pounds:"); // obtain user's weight
var basicNeedsMale = weight * 11; 
var basicNeedsFemale = weight * 10; // find basic needs without any activity for both males and females 

var activity = prompt("What is your activity level? \n20%: Sedentary, a lot of sitting, driving, or sleeping. \n30%:Light activity <2 hours a day. \n40%:Moderate exercise with little time spent sitting. \n50%:Very active in sports or exercise, or involved in an intensive-labor job such as construction."); // find out how active the user is
var activeNeedsMale = basicNeedsMale * activity; 
var activeNeedsFemale = basicNeedsFemale * activity; // find active caloric needs for men and women
