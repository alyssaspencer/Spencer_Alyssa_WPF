//Calculate the number of slices of sparky gets to eat
var slicesPerPizza = 12;
var numPeople = 14;
var numPizza = 5;
var slicesForSparky;


//multiply number of pizzas times number of slices then divide by the number of people
slicesForSparky = slicesPerPizza * numPizza % numPeople;

//print out the slices per person
console.log("Sparky got " + slicesForSparky + " slices of pizza.");