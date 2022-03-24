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


function starterInput (){
    pwLength = parseInt(prompt( 'How long would you like your password to be?', 'Min: 8  -  Max: 128'), 10);
 if (isNaN(pwLength)){
    alert('Use only numbers please.');
    starterInput ()
} else if (pwLength < 8 || pwLength > 128) {
    alert('Please select a another number! (Min: 8  -  Max: 128)');
    starterInput ();
 } else {
    return pwLength;

    
}
}

starterInput ();


// Replaced this function with 'While string inside passwordConditions()
// Couldn't get it to work....
// function userSelector() {
//     let userResult = ' ';
//     const usersLength = pwUserReq.length;
//     for ( let i = 0; i < 1; i++ ) {
//         userResult += pwUserReq.charAt(Math.floor(Math.random() * usersLength));
//     }
//     return userResult;
// }



function passwordConditions (){
  oneEachChar = "";
  pwUserReq = "";
  lowercase = confirm("Would you like it to contain Lowercase?")
  uppercase = confirm("Would you like it to contain Uppercase?")
  numeric = confirm("Would you like it to contain Numbers?")
  specialChar = confirm("Would you like it to contain Special Characters?")
    

    if (lowercase){
      userLowerCase = 'abcdefghijklmnopqrstuvwxyz'
      pwUserReq += userLowerCase
     if (pwUserReq){
      var firstString = "";
      while (firstString.length < 1) {
        firstString += userLowerCase[Math.floor(Math.random() * userLowerCase.length)];
      }
      }
      oneEachChar += firstString; 
      console.log(firstString);
      console.log(oneEachChar);
    }
    if (uppercase){
      userUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      pwUserReq += userUpperCase;
     if (pwUserReq){
      var secondString = "";
      while (secondString.length < 1) {
        secondString += userUpperCase[Math.floor(Math.random() * userUpperCase.length)];
      }
      
    }
    oneEachChar += secondString; 
    console.log(secondString);
    console.log(oneEachChar);
  }
    if (numeric){
      userNumeric = '0123456789'
      pwUserReq += userNumeric
     if (pwUserReq){
      var thirdString = "";
      while (thirdString.length < 1) {
        thirdString += userNumeric[Math.floor(Math.random() * userNumeric.length)];
      }
      }
      oneEachChar += thirdString; 
      console.log(thirdString)
      console.log(oneEachChar);

    }

    if (specialChar){
      userSymbols = '!@#$%^&*";'
      pwUserReq += userSymbols
     if (pwUserReq){
      var fourthString = "";
      while (fourthString.length < 1) {
        fourthString += userSymbols[Math.floor(Math.random() * userSymbols.length)];
      }
      }
      oneEachChar += fourthString; 
      console.log(fourthString)
      console.log(oneEachChar);
      }
  
  if (!lowercase && !uppercase && !numeric && !specialChar){
  alert('Please select at least ONE of the password criteria.')
  passwordConditions()
    
  }
  return pwUserReq;

}


//The collection of user selections stored in a variable eg.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
// var output = passwordConditions();


// WORKING PW GENERATOR
function randomSelector(length) {
    output = passwordConditions();
    let result = ' ';
    const charactersLength = output.length;
    // oneEachChar.length is solution but need the variable value to be accessible from PW conditions LN 138
    //for ( let i = 4; i < length; i++ ) { // the loop I have : STATIC
    for ( let i = oneEachChar.length; i < length; i++ ) { //the loop I want : DYNAMIC

        result += output.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log('output');
console.log(output); // same as console.log(pwUserReq)
//console.log('pwLength');
//console.log(randomSelector(pwLength)) //same as  console.log(result)
console.log(oneEachChar);




function generatePassword() {
  finalPw = randomSelector(pwLength) + oneEachChar;
  return finalPw;
};



console.log('--------------------');
console.log('FINAL FINAL FINAL FINAL')
// console.log(generatePassword(finalPw));
console.log('random selector + user selector');
console.log('--------------------');





















