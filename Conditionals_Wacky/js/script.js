// Amber Salinas -- 21 Aug 2014 -- Conditionals (Personal)

alert("Find the square feet of carpet required to carpet the basement floor, as well as how much it will cost to carpet the basement at $2.50 per square foot."); // The task

alert("The basement is an irregular polygon, so we must divide it into two different rectangles, find the area of each, and add those numbers together."); // The instructions

const carpetPrice = 2.50; // the price of the carpet being used is a constant because it never changes, therefore we don't need any input from the user.

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

var carpet = area1 + area2; // finding the total carpet needed to cover the basement by adding the areas of the two rectangles together.
console.log("The total area of the basement is " + carpet + "ft squared."); // printing total area to console.

var totalPrice = (area1 + area2) * carpetPrice; // calculating the total price by taking the total area and multipying it by the price-per-square-foot of the carpet.
console.log("The total price for the carpet at $2.50 per square foot is $" + totalPrice + "."); // printing the total price to the console.

alert("You will need " + carpet + " square feet of carpet to cover the basement floor. \nThe total cost for the carpet needed for this project is $" + totalPrice + "."); // creating an alert to inform the user of the final result of total carpet needed, as well as how much it will cost. The cost is written on a new line.