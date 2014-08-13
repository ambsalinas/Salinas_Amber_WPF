// Amber Salinas - 12 Aug 2014 - Expressions Worksheet

// Dog Years
const actual = 5; // Sparky's actual age
const dogYears = actual * 7; // Sparky's age in dog years

console.log("Sparky is " + actual + " human years old, which is " + dogYears + " in dog years."); 

// Slice of Pie part 1

const slices = 12; // number of slices for large pizza
const people = 5; // number of people at the party
const pizzas = 2; // number of pizzas ordered

// multiply number of slices by number of pizzas and divide by number of people
var perPerson = (slices * pizzas) / people; 

console.log("Each person ate " + perPerson + " slices of pizza at the party."); 

// Slice of Pie part 2

people = 11; // number of people
pizzas = 6;  // number of pizzas
slices = 8;  // number of slices per pizza

perPerson = (slices * pizzas) % people; // multiply slices by pizzas, take the remainder of that divided by people

console.log("Sparky got " + perPerson + " slices of pizza.");

// Average Shopping Bill 
const weekly = [100, 75, 90, 150, 65]; // totals from past 5 weeks

var total = weekly[0] + weekly[1] + weekly[2] + weekly[3] + weekly[4]; // add weekly amounts for total spent

var average = total/5; 

console.log("You have spent $" + total + " on groceries over five weeks." + " That is an average of $" + average + " per week.");

// Discounts 

const price = 25; // original price
const discount = 15 * .01; // discount percentage
const desc = "blender"; // item
const tax = 5 * .01; // sales tax percentage

// find the discount amount
var disPrice = (price * discount); 
// find the tax amount
var taxPrice = (price * tax); 

var withTax = (price - disPrice) + taxPrice; 
var noTax = (price - disPrice); //* subtract the discount from the total price *//

console.log("Your " + desc + " was originally $" + price + " but after a " + discount + "% discount, it is now $" + noTax + " without tax, and $" + withTax + " with tax."); 

