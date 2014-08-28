// Amber Salinas -- 28 August 2014 -- Functions_Industry

// Every 6 months my Unit holds a firing range so that all Soldiers can qualify with their weapons. There is a lot of planning that goes into a range, and one of the most important factors to consider is how much ammunition will be needed to ensure that there is enough for everyone. Here is a script that could help the Range Noncommissioned-Officer In Charge (NCOIC) determine how much ammo is needed.

var soldiers = prompt("How many Soldiers will be attending the range?"); // prompt the NCOIC to determine how many total Soldiers will be firing

var zero = 18; // this is how many rounds an individual needs to "zero" their weapon (making sure the sights are properly aligned)
var qual = 40; // this is the number of rounds needed for qualification

function calcAmmo(s, z, q){ // define the function and show that it needs three parameters
    var totalAmmo = s * (z + q); // show that we need to multiply the number of soldiers by the sum of ammo required to zero and qualify.
    return totalAmmo;
}

var totalAmmo = calcAmmo(soldiers, zero, qual); // defining the variable for the results of the function, as well as telling the computer what parameters to use within the function