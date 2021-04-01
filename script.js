// Assignment Code
var generateBtn = document.querySelector("#generate");




// Password Generation Function
function generatePassword() {

    // Inital ASCII Tables for Single Character Types
    let lowerCaseOrdinals = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
    let upperCaseOrdinals = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
    let numericOrdinals = [48,49,50,51,52,53,54,55,56,57];
    let specialOrdinals = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126];


    // Initialize Empty String for Password
    let password = '';

    // Initialize Empty Array for Desired Ordinals
    let desiredCharacterOrdinals = [];

    // User Prompts for Desired Character Types
    let lowerCase = window.confirm('Would you like lowercase?');      
    if (lowerCase) {
        for (let i = 0; i < lowerCaseOrdinals.length; i++) {
            desiredCharacterOrdinals.push(lowerCaseOrdinals[i]);
        }
    }     
    let upperCase = window.confirm('Would you like uppercase?');   
    if (upperCase) {
        for (let i = 0; i < upperCaseOrdinals.length; i++) {
            desiredCharacterOrdinals.push(upperCaseOrdinals[i]);
        }
    }           
    let numeric = window.confirm('Would you like numeric characters?');
    if (numeric) {
        for (let i = 0; i < numericOrdinals.length; i++) {
            desiredCharacterOrdinals.push(numericOrdinals[i]);
        }
    }
    let special = window.confirm('Would you like special characters?');
    if(special) {
        for (let i = 0; i < specialOrdinals.length; i++) {
            desiredCharacterOrdinals.push(specialOrdinals[i]);
        }
    }

    // User Prompt for Desired Password Length
    let passLength = window.prompt('How long do you want the password to be?');   
    if ((passLength < 8) || (passLength > 128)) {     
        while ((passLength < 8) || (passLength > 128)) {
        passLength = window.prompt('Please enter a value between 8 and 128');
        }
    }

    // Password Generation
    let i = 0;
    while (i < passLength) {
        let randomOrdinal = desiredCharacterOrdinals[Math.floor(Math.random() * desiredCharacterOrdinals.length)];
        let randomCharacter = String.fromCharCode(randomOrdinal);
        password = password + randomCharacter;
        i++;     
    }

    // Return Password from Function
    return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Credit to Jeremy Joanet and Tom Siemion for the idea 
// on how to remove the 4 bit truth table in my original script. 