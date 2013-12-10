/*Alyssa Spencer*/

var userName = prompt ("Please enter your Username below."); // Asks the user to type in their username.

var passWord = prompt ("Please enter your Password below."); // Asks the user to type in their password.

// Determines if the information provided by the user is correct.
if (userName == "Student" && passWord == "qwerty123"){
    // This will alert the user if the username and password is correct.
    alert("Welcome" + " " + userName + "!");
}else if(userName != "Student"){
    // This will alert the user if the username is INCORRECT and the password is CORRECT.
    alert("Username and password do not match. Please try again..");
}else{
    // This will alert the user if the username is CORRECT and the password is INCORRECT.
    alert("Password does not match our records.");
}