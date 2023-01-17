var charLength = 8;
  var choiceArr = []; 
  
  var numberArr = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharArr = ['!','@','#','$','%','^','&','*'];
  var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Assignment code here
var generateBtn = document.querySelector("#generate");

passwordText = [""]
// Write password to the #password input
function writePassword() {
 var correctPrompts = getPrompts();
 var passwordText = document.querySelector("#password");

 if(correctPrompts) {
  var newPassword = generatePassword();
 passwordText.value = newPassword;
 } else {
  passwordText.value = "";
 }

}

function generatePassword(){
  var password = "";
  for(var i = 0; i < charLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Requirement Prompts
function getPrompts(){
  choiceArr = [];

  charLength = parseInt(prompt("how many characters would you like your password to be? (required 8 to 128 characters"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Character length has to be a number between 8 and 128. Try again.");

    return false;
  }

if (confirm("Click OK to include special chacters")){
  choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm("Click OK to include lowercase letters")){
  choiceArr = choiceArr.concat(lowerCaseArr);
}
if (confirm("Click OK to include uppercase letters")){
  choiceArr = choiceArr.concat(upperCaseArr);
}
if (confirm("Click OK to include numbers")){
  choiceArr = choiceArr.concat(numberArr);
}
return true;
}