// Assignment code here

// maybe to use
// charactersALL = charactersALL.concat(lowerCase, upperCase, numbers, specialCharacters); 
// for (var i = 0; i < passwordLength; i++) {
//   var randomIndex = Math.floor(Math.random() * charactersALL.length);
//   password += charactersALL[randomIndex];
// }


var charactersALL = [];
var passwordLength = 8;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
"-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`",
"{", "|", "}", "~"]; // 30 length, 29 values starting from 0


function userPrompts () {
  var charactersALL = [];
  passwordLength = parseInt(prompt("How many characters would you like to use between 8 and 128? "));
  
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("The password's length has to be between 8 and 128 characters");
    return false;
  }
  if (confirm("Would you like to use lower case letters?")) {
    charactersALL = charactersALL.concat(lowerCase);
  }
  if (confirm("Would you like to use upper case letters?")) {
    charactersALL = charactersALL.concat(upperCase);
  }
  if (confirm("Would you like to use numbers?")) {
    charactersALL = charactersALL.concat(numbers);
  }
  if (confirm("Would you like to use special characters?")) {
    charactersALL = charactersALL.concat(specialChar);
  }
  return true;
}


function generatePassword() {
  var correctPrompts = userPrompts();
  // console.log("this is fun");
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charactersALL.length);
    password = password * charactersALL[randomIndex];

  }
  
  return "Your password is: " + password; //here goes the random generated password
  console.log(password);
}



// this was the code provided for the homework
generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts =  userPrompts();
  
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    
  } else {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);