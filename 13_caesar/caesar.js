const caesar = function (input, jump) {
  let isANumberReg = new RegExp(/^[a-z]/i);
  let currentChar;
  let currentNuberUnicodeValue;
  let encryptedText = "";
  for (let i = 0; i < input.length; i++) {
    currentNuberUnicodeValue = input.charCodeAt([i]);
    if (currentNuberUnicodeValue >= 65 && currentNuberUnicodeValue <= 90) {
      while (currentNuberUnicodeValue + jump > 90) {
        currentNuberUnicodeValue = currentNuberUnicodeValue - 26;
      }
      while (currentNuberUnicodeValue + jump < 65) {
        currentNuberUnicodeValue = currentNuberUnicodeValue + 26;
      }
      currentNuberUnicodeValue += jump;
    }
    if (currentNuberUnicodeValue >= 97 && currentNuberUnicodeValue <= 122) {
      while (currentNuberUnicodeValue + jump > 122) {
        currentNuberUnicodeValue = currentNuberUnicodeValue - 26;
      }
      while (currentNuberUnicodeValue + jump < 97) {
        currentNuberUnicodeValue = currentNuberUnicodeValue + 26;
      }
      currentNuberUnicodeValue += jump;
    }
    encryptedText += String.fromCharCode(parseInt(currentNuberUnicodeValue));
  }
  return encryptedText;
};

// Do not edit below this line
module.exports = caesar;
