//Variables
const distanceToFullSail = 33897600;//length, in inches, from Full Sail to my house
const inchPerMile = 63360; //number of inches in a mile
var nameOfItem; //variable for the name of the item
var lengthOfItem; //variable for the length of the item in inches
var numProduced; //variable for the number of the item produced each year
var result; //Variable to hold the result of true or false
var lengthProducedPerYr; //Variable to hold the length (in inches) of the item produced each year

//Input
nameOfItem = prompt("What is the name of the item? \nEx. Pencil");//Prompt for the user to input the name of the item
lengthOfItem = prompt("How long is the item, in inches? \nEx. 10");//Prompt for the user to input the length of the item
numProduced = prompt("How many " + nameOfItem + " are produced each year?");//Prompt for the user to input the number of the item produced each year

//Calculations
lengthProducedPerYr = lengthOfItem * numProduced;//Calculates the total length produced each year
if(distanceToFullSail < lengthProducedPerYr)//looks to see if the distance from my house to Full Sail is shorter than the length of the item produced each year
{
    result = true;//sets result to true
}else//if the distance to Full Sail is more than the total length of the item it will apply the code under else
{
    result = false;//sets result to false
}

//Output
if(result == true)
{
    console.log("Yes, you do produce enough " + nameOfItem + " to reach from Charlotte, NC to Full Sail University.  It would be able to make the trip " + lengthProducedPerYr/distanceToFullSail + " times.");
}
else
{
    console.log("No, you do not produce enough " + nameOfItem + " to reach from Charlotte, NC to Full Sail University.  It would only be able to make " + lengthProducedPerYr/distanceToFullSail + "% of the trip.");
}