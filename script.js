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
// var pwUserReq= "";


function starterInput (){
    pwLength = parseInt(prompt( 'How long would you like your password to be?', 'Min: 8  -  Max: 128'), 10);
  if (isNaN(pwLength)){
    alert('Use only numbers please.');
    starterInput ()
} else if (pwLength < 8 || pwLength > 128) {
    alert('Please select a another number! (Min: 8  -  Max: 128)');
    starterInput ();
// }  else if (pwLength != null || pwLength != ""){
//     alert('Selection can not be left blank');
//     starterInput ();
} else {
    return pwLength;
}
}

starterInput ();

console.log(pwLength);

function passwordConditions(){
  var pwUserReq = "";
  lowercase = confirm("Would you like it to contain Lowercase?")
  uppercase = confirm("Would you like it to contain Uppercase?")
  numeric = confirm("Would you like it to contain Numbers?")
  specialChar = confirm("Would you like it to contain Special Characters?")
    
    if (lowercase){
      pwUserReq += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (uppercase){
      pwUserReq += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (numeric){
      pwUserReq += '0123456789'
    }
    if (specialChar){
      pwUserReq += '!@#$%^&*";'
    }
  
  if (!lowercase && !uppercase && !numeric && !specialChar){
  alert('Please select at least ONE of the password criteria.')
  passwordConditions()
    
  }
  return pwUserReq;
}


    
var output = passwordConditions();

    console.log(lowercase);
    console.log(uppercase);
    console.log(numeric);
    console.log(specialChar);

    console.log(output);




