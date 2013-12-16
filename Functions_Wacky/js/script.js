/*Alyssa Spencer*/

var gumSticks = prompt("How many pieces of gum are in a pack?"); // Prompts user to add the amount of gum in a pack.
var gumPacks = prompt("How many packs of gum?"); // Prompts user how many packs of gum.
var gumChews = 100; // How many chews are in one piece of gum.
var maxChews = 30000; // Max amount of gun until your jaw falls off.

var calcChews = function(gumSticks, gumPacks, gumChews){ // Defining the function. Anonymous function.
    var total = gumSticks * gumPacks * gumChews; // The actual multiplying.
    return total;
}

var totalChews = calcChews(gumSticks, gumPacks, gumChews); // Named function.

// Ternary
(totalChews <= maxChews) ? alert("Your jaw is safe! You didn't chew too much! :]") : alert("Your jaw is about to fall off, you chewed to much! :["); // This determines if you chewed to much.