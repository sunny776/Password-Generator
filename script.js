// ALL MY DATA
//var generateBtn = document.getElementById("generate");
var AllNumbers = '1234567890';
var upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '”#$%&’()*+-./:;<=>?@[\^_{|}~';
var passwordArray = "";
var numbers = false;
var upperCase = false;
var lowerCase = false;
var special = false;

//MY FUNCTION
function generatePassword() {

        var length = prompt("Please Enter a number between 8 and 128 for your password to be generated.");
        while (length < 8 || length > 128) {
                length = prompt("Please enter a new length between 8 and 128.")
        }

        numbers = confirm("Would you like to include NUMBERS in your password ");
        if (numbers === true) {
                passwordArray += AllNumbers;
        }
        upperCase = confirm("Would you like to include UPPERCASE LETTERS in your password ");
        if (upperCase === true) {
                passwordArray += upperCaseLetter;
        }

        lowerCase = confirm("Would you like to include LOWERCASE LETTERS in your password ");
        if (lowerCase === true) {
                passwordArray += lowerCaseLetter;
        }
        special = confirm("Would you like to include SPECIAL CHARACTERS  in your password ");
        if (special === true) {
                passwordArray += specialCharacters;

        }

        //MY GENERATED PASSWORD
        var newpassword = [];
        for (let i = 0; i < length; i++) {
                var password = passwordArray[Math.floor(Math.random() * passwordArray.length)];
                newpassword.push(password);
        }

        document.getElementById("password").textContent = newpassword.join("");


}

//generatePassword();

