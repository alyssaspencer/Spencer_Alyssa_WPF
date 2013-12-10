/*Alyssa Spencer*/

var degrees = prompt ("Please enter the temperature of the below."); // Will ask the user to enter a value.

var unit = prompt ("Please enter the unit type below."); // Will ask if the user wants "C" or "F" for degrees measurement.

if (unit === "C") // This is the operation that figures if the user typed a celsius degree or a fahrenheit one and then figures it
{
    var degreesF = degrees * 9 / 5 + 32; // If the user chose C then it will figure with this evaluation  put out a Fahrenheit degree
    console.log(degreesF + " F");
}else{
    var degreesC = (degrees - 32) * 5 / 9; // If the user chose F then it will figure with this evaluation and put out a Celsius degree
    console.log(degreesC + " C");
}

