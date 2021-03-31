// Assignment Code
var generateBtn = document.querySelector("#generate");



// Inital ASCII Tables for Single Character Types
let lcOnly = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
let ucOnly = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
let numericASCII = [48,49,50,51,52,53,54,55,56,57];
let specialASCII = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126];


// Combined ASCII Tables for Multiple Character Types
let allCharacters = lcOnly.concat(ucOnly, numericASCII, specialASCII);
let notSpecial = lcOnly.concat(ucOnly, numericASCII);
let notNumeric = lcOnly.concat(ucOnly, specialASCII);
let allAlphabet = lcOnly.concat(ucOnly);
let notUpperCase = lcOnly.concat(numericASCII, specialASCII);
let lowerCaseAndNumeric = lcOnly.concat(numericASCII);
let lowerCaseAndSpecial = lcOnly.concat(specialASCII);
let notLowerCase = ucOnly.concat(numericASCII, specialASCII);
let upperCaseAndNumeric = ucOnly.concat(numericASCII);
let upperCaseAndSpecial = ucOnly.concat(specialASCII);
let numericAndSpecial = numericASCII.concat(specialASCII);


// Password Generation Function
function generatePassword() {

  //Initalize Empty String for Password
  let password = '';


  // User Prompts for Desired Character Types
  let lowerCase = window.confirm('Would you like lowercase?');                  //RETURNS BOOLEAN T/F
  let upperCase = window.confirm('Would you like uppercase?');              
  let numericCh = window.confirm('Would you like numeric characters?');
  let specialCh = window.confirm('Would you like special characters?');

  // User Prompt for Desired Password Length
  let passLength = window.prompt('How long do you want the password to be?');   
  if ((passLength < 8) || (passLength > 128)) {     
    while ((passLength < 8) || (passLength > 128))                              //If Password Length is Outside Range, Keep Asking Until Valid Numeric Value
      passLength = window.prompt('Please enter a value between 8 and 128');
  }


  // Actual Password Generation                                         //4 BIT TRUTH TABLE
  if (lowerCase && upperCase && numericCh && specialCh) {               // 1 1 1 1
    console.log("ALL CHARACTERS");
    console.log(allCharacters);  
    let i = 0;                                                                            //Counter Initialization
    while (i < passLength) {                                                              //Run Until Desired Password Length is Reached
      let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];   //Random Ordinal Selection
      let res = String.fromCharCode(randomChar);                                          //Convert Ordinal to Corresponding String Character
      password = password + res;                                                          //Concatenate Next Character to Existing Password Generation
      i++;                                                                                //Iterate the counter
      console.log(password)
    }             
    return password;                                                                      //Return the Password from the Function
  }                                                                     

  else if (lowerCase && upperCase && numericCh && !specialCh) {         // 1 1 1 0
    console.log("NOT SPECIAL");
    console.log(notSpecial);
    let i = 0;
    while (i < passLength) {
      let randomChar = notSpecial[Math.floor(Math.random() * notSpecial.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
      console.log(password);
    }
    return password;
  }

  else if (lowerCase && upperCase && !numericCh && specialCh) {         // 1 1 0 1
    console.log("NOT NUMERIC");
    console.log(notNumeric);
    let i = 0;
    while (i < passLength) {
      let randomChar = notNumeric[Math.floor(Math.random() * notNumeric.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (lowerCase && upperCase && !numericCh && !specialCh) {        // 1 1 0 0
    console.log("ALL ALPHABET");
    console.log(allAlphabet);
    let i = 0;
    while (i < passLength) {
      let randomChar = allAlphabet[Math.floor(Math.random() * allAlphabet.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (lowerCase && !upperCase && numericCh && specialCh) {         // 1 0 1 1
    console.log("NOT UPPERCASE");
    console.log(notUpperCase);
    let i = 0;
    while (i < passLength) {
      let randomChar = notUpperCase[Math.floor(Math.random() * notUpperCase.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (lowerCase && !upperCase && numericCh && !specialCh) {        // 1 0 1 0
    console.log("LOWERCASE AND NUMERIC");
    console.log(lowerCaseAndNumeric);
    let i = 0;
    while (i < passLength) {
      let randomChar = lowerCaseAndNumeric[Math.floor(Math.random() * lowerCaseAndNumeric.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (lowerCase && !upperCase && !numericCh && specialCh) {        // 1 0 0 1
    console.log("LOWERCASE AND SPECIAL");
    console.log(lowerCaseAndSpecial);
    let i = 0;
    while (i < passLength) {
      let randomChar = lowerCaseAndSpecial[Math.floor(Math.random() * lowerCaseAndSpecial.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (lowerCase && !upperCase && !numericCh && !specialCh) {       // 1 0 0 0 
    console.log("ONLY LOWERCASE");
    console.log(lcOnly);
    let i = 0;
    while (i < passLength) {
      let randomChar = lcOnly[Math.floor(Math.random() * lcOnly.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (!lowerCase && upperCase && numericCh && specialCh) {         // 0 1 1 1
    console.log("NOT LOWERCASE")
    console.log(notLowerCase);
    let i = 0;
    while (i < passLength) {
      let randomChar = notLowerCase[Math.floor(Math.random() * notLowerCase.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (!lowerCase && upperCase && numericCh && !specialCh) {        // 0 1 1 0
    console.log("UPPERCASE AND NUMERIC")
    console.log(upperCaseAndNumeric);
    let i = 0;
    while (i < passLength) {
      let randomChar = upperCaseAndNumeric[Math.floor(Math.random() * upperCaseAndNumeric.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (!lowerCase && upperCase && !numericCh && specialCh) {        // 0 1 0 1
    console.log("UPPERCASE AND SPECIAL")
    console.log(upperCaseAndSpecial);
    let i = 0;
    while (i < passLength) {
      let randomChar = upperCaseAndSpecial[Math.floor(Math.random() * upperCaseAndSpecial.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (!lowerCase && upperCase && !numericCh && !specialCh) {       // 0 1 0 0
    console.log("ONLY UPPERCASE")
    console.log(ucOnly);
    let i = 0;
    while (i < passLength) {
      let randomChar = ucOnly[Math.floor(Math.random() * ucOnly.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (!lowerCase && !upperCase && numericCh && specialCh) {        // 0 0 1 1
    console.log("NUMERIC AND SPECIAL")
    console.log(numericAndSpecial);
    let i = 0;
    while (i < passLength) {
      let randomChar = numericAndSpecial[Math.floor(Math.random() * numericAndSpecial.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else if (!lowerCase && !upperCase && numericCh && !specialCh) {       // 0 0 1 0
    console.log("ONLY NUMERIC")
    console.log(numericASCII);
    let i = 0;
    while (i < passLength) {
      randomChar = numericASCII[Math.floor(Math.random() * numericASCII.length)];
      res = String.fromCharCode(randomChar);
      password = password + res;
      i++
    }
    return password;
  }

  else if (!lowerCase && !upperCase && !numericCh && specialCh) {       // 0 0 0 1
    console.log("ONLY SPECIAL")
    console.log(specialASCII);
    let i = 0;
    while (i < passLength) {
      let randomChar = specialASCII[Math.floor(Math.random() * specialASCII.length)];
      let res = String.fromCharCode(randomChar);
      password = password + res;
      i++;
    }
    return password;
  }

  else {                                                                // 0 0 0 0 
    alert("You must have some character type selected");
  }

}




// Write password to the #password input
function writePassword() {
  let password = generatePassword();     //Need to write function generatePassword(), writePassword() should work already
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
