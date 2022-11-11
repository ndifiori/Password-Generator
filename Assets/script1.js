
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
];

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
];

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
];

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
];

// that should take care of our variable arrays
// now we need a function to store the values that the user wants

function passwordInfo() {

   // like mini project example, need to create variable to store user input when prompted

  // parseInt will take the answer given as a string and will interpret it as a number

  var length = parseInt(
    window.prompt('How many characters would you like you password to be?')
    );

   // now if they give a word we need to give them alert that they need to give a number in integer form

  if (Number.isNaN(length)) {
    window.alert("Password must be in number form.");
    return null;
  }

   // now we know that the password is a number but we need to make sure the password the user wants me the length criteria

  // now we must check to see if that number is greater than 8 
  if (length < 8) {
    window.alert("Password must be at least 8 character.");
    return null;
  }
  // now we know that the number is greater than 8 but we need to make sure it is less than
  if (length > 128) {
    window.alert("Password must be less than 128 characters.");
    return null;
  }

  // now we know that password has an acceptable length 
  // BUT
  // we need the user to select what characters - numeric, special, lowercase, uppercase - are in their password

  //we need prompts that allow the user to select these options
  // can't use window. prompt because we need the user to select aka store boolean value

  var confirmNumbers = window.confirm(
    "Click ok to confirm including numbers."
    );

  var confirmSpecialCharacters = window.confirm(
    "Click ok to confirm including special characters."
    );

  var confirmLowerCaseLetters = window.confirm(
    "Click ok to confirm including lower case letters."
    );

  var confirmUpperCaseLetters = window.confirm(
    "Click ok to confirm including upper case letters."
    );

  // now what if they don't pick any of the options, we need them to see an error
  if (
    confirmNumbers === false &&
    confirmSpecialCharacters === false &&
    confirmLowerCaseLetters === false &&
    confirmUpperCaseLetters === false
  ) {
    window.alert("Must select at least one option.");
    return null;
  }

   // like the length we also need to find a way to save the users choices pertaining to the above selections

  // we can do this by storing the boolean answers in the confirm option above using an object with key value pairs
  var Options = {
    length: length,
    confirmNumbers: confirmNumbers,
    confirmSpecialCharacters: confirmSpecialCharacters,
    confirmLowerCaseLetters: confirmLowerCaseLetters,
    confirmUpperCaseLetters: confirmUpperCaseLetters,
  };

  return Options;
}

// now we need to generate a random password based on the selections that the user wanted

// like activity 28 we need to generate a a way to select a random array
// we do this by creating a function with the parameters of an array
  // then we create a variable with the value of a random number multiplied by array length
  // then we create another variable that multiples array parameter by random previous variable
  
  // this gets called upon in the generate password function below
    // the global variable arrays are the parameter for this random function

function Random(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomGenerator = arr[index];

  return randomGenerator;
}


// this is the function that gets called when the button is clicked which also holds the first function that stored the user information

function generatePassword() {

  // declaring this variable as our previous function which gives us access to what the user wants
  var passwordOptions = passwordInfo();

  var result = [];

  // this is an array of possible characters that might be included
  var possibleCharacters = [];

  var guaranteedCharacters = [];

  // if no options are selected by the user it should end the program
  if (!passwordOptions) return null;


  // this states if the user wants special characters then they will added to the array of possible characters that might be included 
  if (passwordOptions.confirmSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(Random(specialCharacters));
  }

  // this states that if the user wants numbers then they will be added to the array of possible characters that might be included 
  if (passwordOptions.confirmNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(Random(numericCharacters));
  }

  // this states that if the user wants lower case letters then they will be added to the array of possible characters that might be included
  if (passwordOptions.confirmLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(Random(lowerCaseLetters));
  }

    // this states that if the user wants upper case letters then they will be added to the array of possible characters that might be included
  if (passwordOptions.confirmUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(Random(upperCaseLetters));
  }

  // for the above conditional statements we pushing a random character to the guaranteed characters array

  // below will take the passwordoptions and iterate one by one selecting random character to be added to the possible characters array
  for (var i = 0; i < passwordOptions.length; i++) {
    var possibleCharacter = Random(possibleCharacters);
    result.push(possibleCharacter);
  }

  // this will take the length of the guaranteed characters array and iterate over it selecting random characters to be added
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // here we are joining both arrays to get the final result of our passward for the user
  return result.join("");
}

// last step below

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// this allows us to identify where and how to put the results of the function 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
// when the button is clicked it runs the write password function that holds our generate password function inside of it which in turns holds the password info function within it
generateBtn.addEventListener('click', writePassword);

