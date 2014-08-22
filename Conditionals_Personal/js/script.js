// Amber Salinas -- 21 Aug 2014 -- Conditionals (Personal)

// Check to see if you have the budget available to afford the total cost of the basement project calculated in the first script. 

var totalCost = prompt("What is the total cost to carpet the basement?"); // prompt the user to determine what their total cost is.

if (totalCost == ""){
	var totalCost = prompt("We need the total before we can go any further!"); // make sure the user inputs something!
}else{
	console.log("You entered $" + totalCost + ".");
}

var budget = prompt("What is your budget for this month?"); // once the user has input a total, let's find out what their monthly budget is.
console.log("You have $" + budget + " to spend this month, and the basement will cost $" + totalCost + " to complete."); // print their budget to the console

// Now let's see if the user has any savings to add to their budget. 
var savings = prompt("How much money do you have saved?"); 

if (savings == ""){
	var savings = prompt("We need to know how much money you have saved before we can go any further!"); // let's validate that the user has input a value for savings, as this is vital to finishing the script.
}else{
	console.log("You entered $" + savings + "."); 
}

var totalBudget = savings + budget; // create a variable that takes the sum of your savings and budget to create a total budget available.
console.log("You have a total of $" + totalBudget + " to spend on this project."); // make sure the variable is being processed correctly by displaying the result. 

// Now we will create a code that will determine several things and react accordingly:
if (totalCost > totalBudget){
	console.log("You do not have enough money to finish this project at this time."); // if the cost of the project is GREATER THAN your budget and savings combined, you do not have enough money to complete it. 
}else if (totalCost == totalBudget){
	console.log("You have just enough, but you may want to save more money before carpeting the basement."); // if the cost of the project is EQUAL TO your budget and savings combined, you have just enough but should probably save more to give yourself a cushion.
}else { 
	console.log("Great! You can finish this project without any financial strain!"); // if the cost of the project is anything other than greater than or equal to (so LESS THAN) your savings and budget combined, then you have enough money to finish it without having to worry about money left over.
} 