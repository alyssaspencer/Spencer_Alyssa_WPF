/*Alyssa Spencer*/

var width = prompt ("Please enter the width of the car."); // Width of car.
var height = prompt ("Please enter the height of the car."); // Height of car.
var depth = prompt ("Please enter the depth of the car."); // Depth of car


// Anonymous function, and has 3 operators.
var calcVolume = function(width, height, depth){ // Defining the function.
    var volume = width * height * depth;
    return volume;
}

var a = calcVolume(width, height, depth); // This invokes the function.

//(var <= var) ? alert() : alert();

alert("The volume of the build is " + a + " cubic inches. \n\nThe width was " + width + " inches, height was " + height + " inches, and the depth was " + depth + " inches."); // This outputs to alert.