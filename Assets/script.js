
// let's set our global variables that we need from the ReadMe file

// variable 1 is numeric characters
var numericCharacters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
]

// variable 2 is special characters
var specialCharacters = [
  "!",
  "#",
  "$",
  "&",
  "%",
  "*",
  "+",
  "@",
  "~",
  ":",
  "'",
  "[",
  "]",
  ".",
  "_",
  "?",
  "(",
  ")",
  "{",
  "}",
]

// variable 3 is lower case letters
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
]

// variable 4 is upper case letters
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
]

// that should take care of our variable arrays
// now we need a function to store the values that the user wants

function passwordInfo() {

  // like mini project example, need to create variable to store user input when prompted

  // parseInt will take the answer given as a string and will interpret it as a number

  var passwordLength = parseInt(window.prompt('How many characters would you like you password to be?'));

  // now if they give a word we need to give them alert that they need to give a number in integer form

  if (Number.isNaN(passwordLength)) {
    window.alert("Password must be in number form.");
    return null;
  }

  // now we know that the password is a number but we need to make sure the password the user wants me the length criteria

  // now we must check to see if that number is greater than 8 

  if (passwordLength < 8) {
    window.alert("Password must be at least 8 character.");
    return null;
  }

  // now we know that the number is greater than 8 but we need to make sure it is less than 128

  if (passwordLength > 128) {
    window.alert("Password must be less than 128 characters.");
    return null;
  }

  // now we know that password has an acceptable length 
  // BUT
  // we need the user to select what characters - numeric, special, lowercase, uppercase - are in their password

  //we need prompts that allow the user to select these options
  // can't use window. prompt because we need the user to select

  var confirmNumbers = window.confirm("Click ok to confirm including numbers.");

  var confirmSpecialCharacters = window.confirm("Click ok to confirm including special characters.");

  var confirmLowerCase = window.confirm("Click ok to confirm including lower case letters.");

  var confirmUpperCase = window.confirm("Click ok to confirm including upper case letters.");

  // like the passwordlength we need to find a way to save the users choices pertaining to the above selections

  // we can do this by storing the boolean answers in the confirm option above using an object with key value pairs

  var Options = {
    length: length,
    confirmNumbers: confirmNumbers,
    confirmSpecialCharacters: confirmSpecialCharacters,
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
  };

  return Options;

  // now what if they don't pick any of the options, we need them to see an error

  if (confirmNumbers === false && confirmSpecialCharacters === false && confirmLowerCase === false && confirmUpperCase === false) {
    window.alert("Must select at least one option.");
    return null;
  }

}

// now we need to generate a random password based on the selections that the user wanted

// like activity 28 we need to generate a a way to select a random array

function Random(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomGenerator = arr[index];

  return randomGenerator;
}

// now we have the user information stored and we have a way to randomize the password
// the next step is actually generate the password

function generatePassword() {
  var 
}














// Assignment Code that runs the code when the button is clicked
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


