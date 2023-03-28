// Assignment Code
var passwordLength = 8;
var choice = [];
// Characters to be used in password generation
var special = ["!","@","#","$","%","^","&","*","(",")","?","<",">","/","[","]","{","}","|",";",":","=","+",];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","d","t","u","v","w","x","y","z",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var number = [1,2,3,4,5,6,7,8,9,0]
var generateBtn = document.querySelector("#generate");
var choice = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {


}

function getPrompt(){

passwordLength = parseInt(prompt("How many characters in your new password?"));

if (isNaN(passwordLength) || passwordLength < 8 ) {
    alert("length insufficent");
    return false;

    }

    if (confirm("would you like lowercase letters to be included?")) {
        choice = choice.concat(lower);
    }

    if (confirm("would you like uppercase letters to be included?")) {
        choice = choice.concat(upper);

    }

    if (confirm("would you like numbers to be included?")) {
        choice = choice.concat(number);

    }
        if (confirm("would you like special characters to be included?")) {
        choice = choice.concat(special);

    }

    return true;
}