const palindromes = function (givenText) {
    let reversedString = "";
    let normalisedString = "";
    let alphaReg = new RegExp(/^[a-z]/i);
    for (let i = givenText.length - 1; i >= 0; i--) {
        if (alphaReg.test(givenText[i])) {
            reversedString += givenText[i];
        }
    }
    for (let i = 0; i < givenText.length; i++) {
        if (alphaReg.test(givenText[i])) {
            normalisedString += givenText[i];
        }
        
    }
    reversedString = reversedString.toLowerCase();
    normalisedString = normalisedString.toLowerCase();
    if (reversedString == normalisedString) {
        return true;
    }
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
