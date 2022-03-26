// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase;
var uppercase;
var numeric;
var specialChar;
var minLength = 8;
var maxLength = 128;
var pwLength;
var pwUserReq= "";
var oneEachChar = "";
var finalPw = "";
var output

//Function that collects the numic input from the user, stores the value in pwLength
//if it is less than 8 or more than 128, user is prompted to reselect within the correct range
//if value enter is Not a Number, user is prompted to reslect making sure that input is a number
function starterInput() {
  pwLength = parseInt(
    prompt(
      "How long would you like your password to be?",
      "Min: 8  -  Max: 128"
    ),
    10
  );


  console.log(pwLength);
  if (isNaN(pwLength)) {
    alert("Use only numbers please.");
   starterInput();
  } else if (pwLength < 8 || pwLength > 128) {
    alert("Please select a another number! (Min: 8  -  Max: 128)");
    starterInput();
  }
  console.log(pwLength);
  return pwLength;
}


function passwordConditions() {
  oneEachChar = "";
  pwUserReq = "";

  console.log(pwLength);

  //GATHERING USER INPUT FOR WHAT CHARS ARE REQUIRED IN THE FINAL PASSWORD
  lowercase = confirm("Would you like it to contain Lowercase?");
  uppercase = confirm("Would you like it to contain Uppercase?");
  numeric = confirm("Would you like it to contain Numbers?");
  specialChar = confirm("Would you like it to contain Special Characters?");

  //IF NO CRITERIA IS SELECTED, USER PROMPTED TO SELECT AGAIN UNTIL AT LEAST ONE IS CHOSEN
  if (!lowercase && !uppercase && !numeric && !specialChar) {
    alert("Please select at least ONE of the password criteria.");
    passwordConditions();
  }

  if (lowercase) {
    userLowerCase = "abcdefghijklmnopqrstuvwxyz";
    pwUserReq += userLowerCase;
    var firstString = "";
    firstString +=
      userLowerCase[Math.floor(Math.random() * userLowerCase.length)];
    oneEachChar += firstString;
  }

  if (uppercase) {
    userUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    pwUserReq += userUpperCase;
    var secondString = "";
    secondString +=
      userUpperCase[Math.floor(Math.random() * userUpperCase.length)];

    oneEachChar += secondString;
  }

  if (numeric) {
    userNumeric = "0123456789";
    pwUserReq += userNumeric;
    var thirdString = "";
    thirdString += userNumeric[Math.floor(Math.random() * userNumeric.length)];

    oneEachChar += thirdString;
  }

  if (specialChar) {
    userSymbols = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
    pwUserReq += userSymbols;
    var fourthString = "";
    fourthString += userSymbols[Math.floor(Math.random() * userSymbols.length)];
    oneEachChar += fourthString;
  }
  console.log(pwUserReq);
  return pwUserReq;
}
//pwUserReq colleccts all the selected criteria strings and concatenates them
//eg.ABCDEFGHIJKLMNOPQRSTUVWXYZ + abcdefghijklmnopqrstuvwxyz + 0123456789 + !"#$%&()*+,-./:;<=>?@[]^_`{|}~

//oneEachChar selects on random char from the individual string before the concatenate takes place
//eg. User picks numeric, a number is picked at random from 0123456789 and stored in oneEachChar var

// WORKING PW GENERATOR
function randomSelector(length) {
  var passLength = starterInput();

  if (passLength >= 8 && passLength <= 128) {
    output = passwordConditions();
    let result = " ";
    const charactersLength = output.length;
    for (let i = 0; i < passLength - oneEachChar.length; i++) {
      result += output.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}


function generatePassword() {
  finalPw = randomSelector(pwLength) + oneEachChar;
  return finalPw;
};