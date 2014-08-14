// Amber Salinas -- 14 Aug 2014 -- Expressions (Personal)

alert("Find the square feet of carpet required to carpet the basement floor."); // The task

alert("The basement is an irregular polygon, so we must divide it into two different rectangles, find the area of each, and add those numbers together."); // The instructions

var length1 = prompt("What is the length of the first rectangle?"); // finding the length of the larger rectangle
console.log("The length of the first rectangle is " + length1 + " feet."); // printing the user's input to the console

var height1 = prompt("What is the height of the first rectangle?"); // finding the height of the larger rectangle
console.log("The height of the first rectangle is " + height1 + " feet."); // printing the user's input to the console

var area1 = length1 * height1; // finding the area of the larger rectangle by multiplying length by height. 

// printing the result of area1 to the console.
console.log("The area of the first rectangle is " + area1 + "ft squared."); 

var length2 = prompt ("What is the length of the second rectangle?"); // finding the length of the smaller rectangle
console.log("The length of the second rectangle is " + length2 + " feet."); // printing the user's input to the console

var height2 = prompt("What is the height of the second rectangle?"); // finding the height of the smaller rectangle
console.log("The height of the second rectangle is " + height2 + " feet."); // printing the user's input to the console

var area2 = length2 * height2; // finding the area of the second rectangle by multiplying its length and height
console.log("The area of the second rectangle is " + area2 + "ft squared."); // printing results to the console