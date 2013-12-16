/*Alyssa Spencer*/

var movies = prompt("How many movies do you watch a week?")
var weeks = 4; // How many weeks are in a month.
var moviesMin = 30; // Min movies.
var moviesMax = 80; // Max calories.

var calcMov = function(weeks, movies){ // Defining the function. Anonymous function.
    var total = weeks * movies; // The actual multiplying.
    return total;
}

var totalMov = calcMov(weeks, movies); // Named function.

if (totalMov > moviesMin && totalMov < moviesMax){
    // This will determine if you have met the movie goal.
    alert("You have successfully completed your monthly goal!");
}else if(totalMov != moviesMin){ // else if.
    // If you have below the min movies then this will show.
    alert("You did not watch enough movies for the month!");
}else{
    // If you have watched more than 80 movies this will show.
    alert("You have exceeded your goal for this month. Good Job!");
}