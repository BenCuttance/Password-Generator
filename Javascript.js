
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//   passwordText.value = password;
}
function pressBtn() {

var txt;

if (confirm("Would you like to generate a unique password?")) {

} else {
    txt = "You pressed cancel!";

}

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);