//reference generate and password IDs from html
var generateButton = document.getElementById("generate");
var passwordDisplay = document.getElementById("password")

//run function on click
generateButton.addEventListener("click", generatePassword);

//function to generate the password
function generatePassword() {

    //convert pLength to a numerical variable
    var pLength = parseInt(prompt("How many characters would you like?"));

    //establish min/max for password length, reject empty field or string
    if (pLength < 8 || pLength > 128 || !pLength) {
        alert("Please enter a value between 8 and 128 characters.");
        return;
    } 

    //confirm prompts for including different character classes
    var lowercase = confirm("Would you like to include lowercase letters?");
    var uppercase = confirm("Would you like to include uppercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var special = confirm("Would you like to include special characters?");

    //if nothing selected, alert at least one class must be selected
    if (!(lowercase || uppercase || numbers || special)) {
        alert("Must select at least one character class.");
        return;
    }

    //variables for password and compiled options for characters
    var password = "";
    var options = "";

    //adds lowercase characters to the password
    if (lowercase) {
        var lowercaseVals = "abcdefghijklmnopqrstuvwxyz";
        options += lowercaseVals;
        //ensures at least one lowercase character is in the password
        password += getRandomChar(lowercaseVals);
    }

    //adds uppercase characters to the password
    if (uppercase) {
        var uppercaseVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        options += uppercaseVals;
        //ensures at least one uppercase character is in the password
        password += getRandomChar(uppercaseVals);
    }

    //adds numbers to the password
    if (numbers) {
        var numbersVals = "1234567890";
        options += numbersVals;
        //ensures at least one number is in the password
        password += getRandomChar(numbersVals);
    }

    //adds special characters to the password
    if (special) {
        var specialVals = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        options += specialVals;
        //ensures at least one special character is in the password
        password += getRandomChar(specialVals);
    }

    //log the character strings used
    console.log(options);

    //establish password length entered in relation to characters used, see helper function
    for (var i = password.length; i < pLength; i++) {
        password += getRandomChar(options);
    }
    //display password
    passwordDisplay.textContent = password;
}

//helper function, how to get a random character from each string
function getRandomChar(string) {
    return string[Math.floor(Math.random() * string.length)];
}