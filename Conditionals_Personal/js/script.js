// Amber Salinas -- 21 Aug 2014 -- Conditionals (Personal)

// Check to see if you have the budget available to afford the total cost of the basement project calculated in the first script. 

var totalCost = prompt("What is the total cost to carpet the basement?"); // prompt the user to determine what their total cost is.

if (totalCost == ""){
	var totalCost = prompt("We need the total before we can go any further!"); // make sure the user inputs something!
}else{
	var budget = prompt("What is your budget for this month?"); // once the user has input a total, let's find out what their monthly budget is.
}
console.log("You have $" + budget + " to spend this month."); // print their budget to the console

