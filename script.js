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




function starterInput (){
    pwLength = parseInt(prompt( 'How long would you like your password to be?', 'Min: 8  -  Max: 128'), 10);
  if (isNaN(pwLength)){
    alert('Use only numbers please');
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
  lowercase = confirm("Would you like it to contain Lowercase?")
  uppercase = confirm("Would you like it to contain Uppercase?")
  numeric = confirm("Would you like it to contain Numbers?")
  specialChar = confirm("Would you like it to contain Special Characters?")

  if (!lowercase && !uppercase && !numeric && !specialChar){
  alert('Please select at least one of the criteria')
  passwordConditions()
    // console.log(lowercase);
    // console.log(uppercase);
    // console.log(numeric);
    // console.log(specialChar);
}
}
    console.log(lowercase);
    console.log(uppercase);
    console.log(numeric);
    console.log(specialChar);
passwordConditions();

// //Call the password conditons function to get the user input
// passwordConditions();









// function makeid(length) {
//     var result           = '';
//     var characters       = '!@#$%^&*';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }

// console.log(makeid(length));





// var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var lowercase = 'abcdefghijklmnopqrstuvwxyz'
// var numeric = '0123456789'
//var symbol = "!@#$%^&*";"
