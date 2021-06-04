// Assignment Code
var generateBtn = document.querySelector("#generate");

var aBoxForArrays = []
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"];


// var userUpper = confirm("Would you like to use uppercase letters?")
// var userLower = confirm("Would you like to use lowercase letters?")
// var userNumber = confirm("Would you like to use numbers?")
// var userSpecialChar = confirm("Would you like to use special characters?")



function generatePassword() {

  var userLengthChoice = prompt("Please choose a number between 8 and 128", 12)

  if (userLengthChoice < 8 || userLengthChoice > 128)
    window.alert("Please choose a number between 8 and 128, press 'Generate Password' again.")

  else if (userLengthChoice > 7 && userLengthChoice < 129)
    userUpper = confirm("Would you like to use uppercase letters?")
  console.log(userLengthChoice);



  if (userUpper)
    Array.prototype.push.apply(aBoxForArrays, upperCaseLetters)
  console.log(aBoxForArrays);
  userLower = confirm("Would you like to use lowercase letters?")

  if (userLower)
    Array.prototype.push.apply(aBoxForArrays, lowerCaseLetters)
  console.log(aBoxForArrays)
  userNumber = confirm("Would you like to use numbers?")

  if (userNumber)
    Array.prototype.push.apply(aBoxForArrays, numbers)
  console.log(aBoxForArrays);
  userSpecialChar = confirm("Would you like to use special characters?")

  if (userSpecialChar)
    Array.prototype.push.apply(aBoxForArrays, specialChar)
  console.log(aBoxForArrays);

if (!userUpper && !userLower && !userNumber && !userSpecialChar)
window.alert("Must choice atleast 1 option, press 'Generate Password' again.")

  aBoxForArrays.sort(() => Math.random() - 0.5)

  console.log(aBoxForArrays)

  // var userLengthChoice = length

  console.log(userLengthChoice);

// for (var i = 0; i < length; i++) {
  return 
// }

return aBoxForArrays.userLengthChoice.length







}










// TODO how mayn prompts do i need?
//   a prompt for legnth of password
// 







// userChoice =

// userChoice = 

// userChoice = 

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// TODO I need four confirms which will be in array form "true or false"
// = confirm""


// WHEN I answer each promp
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);