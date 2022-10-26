const reverseString = function (givenText) {
  let reversedString = "";
  for (let i = givenText.length - 1; i >= 0; i--) {
    reversedString += givenText[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
