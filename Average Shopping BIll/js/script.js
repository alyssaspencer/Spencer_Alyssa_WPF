//Calculate the average shopping bill over the past 5 weeks
var groceryBillAmt=[180, 100, 95, 200, 150];
var totalSpent;
var avgSpent;

//Add all 5 weeks together for total, divide total by 5 for average
totalSpent = groceryBillAmt[0] + groceryBillAmt[1] + groceryBillAmt[2] + groceryBillAmt[3] + groceryBillAmt[4];
avgSpent = totalSpent / 5;

//Display results in the console
console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks, which is an average of $" + avgSpent + " per week");