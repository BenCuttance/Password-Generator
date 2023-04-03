// Arrays 
var characterLength = 8;
var choiceArr = [];
// Characters to be used in password generation
var special = ["!","@","#","$","%","^","&","*","(",")","?","<",">","/","[","]","{","}","|",";",":","=","+",];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","d","t","u","v","w","x","y","z",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var number = ["1","2","3","4","5","6","7","8","9","0",];
var numbersExist = false
var specialExist = false
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts(){

    choiceArr = [];    
    characterLength = parseInt(prompt("How many characters in your new password? (8-128)"));
    
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("length between 8 - 100");
        return false;
    
        }
    
        if (confirm("would you like lowercase letters to be included?")) {
            choiceArr = choiceArr.concat(lower);
        }
    
        if (confirm("would you like uppercase letters to be included?")) {
            choiceArr = choiceArr.concat(upper);
    
        }
    
        if (confirm("would you like numbers to be included?")) {
            numbersExist = true
            choiceArr = choiceArr.concat(number);
    
        }
            if (confirm("would you like special characters to be included?")) {
                specialExist = true
                choiceArr = choiceArr.concat(special);
    
        }
    
        return true;
    }

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    

    if (correctPrompts) {
        var newPassword = generatePassword();
        
         passwordText.value = newPassword;
       
    }
}

function generatePassword() {
var password = "";

    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];

    }     
        //check if numbers were included 
            //if they were included modified the first charcter to be a number
    if (numbersExist){

       password = password.replace(password[0], Math.floor(Math.random() * 10))
        numbersExist = false
    }

    // if (specialExist){

    //     password = password.replace(password[1], Math.floor(Math.random() * special.length))
    //      numbersExist = false
    //  }
    //         return password;
}


