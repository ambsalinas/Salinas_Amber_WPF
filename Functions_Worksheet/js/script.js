// Amber Salinas -- 26 Aug 2014 -- Functions Worksheet

// Calculate the Circumference of a Circle
var pi = 3.14; // pi
var radius = 15; // the radius
var circ = calculateCirc(pi, radius); // give the function a variable
console.log("The circumference of the circle is " + circ + "."); // print the result


function calculateCirc(pi, radius){ // declare the function
	var circ = (2 * pi) * radius; // the formula for circumference is 2 * pi * r. 
	return circ // return the result of the function
}

