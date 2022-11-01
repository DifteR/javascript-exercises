const caesar = function(input, jump) {
    let isANumberReg = new RegExp(/^[a-z]/i);
    let currentChar;
    let currentNuberUnicodeValue;
    let encryptedText = "";
    for (let i = 0; i < input.length; i++) {
        currentNuberUnicodeValue = input.charCodeAt([i]);
        if (isANumberReg) {
            if (currentNuberUnicodeValue + jump > 91) {
                currentNuberUnicodeValue += jump - 27;
            }
            else currentNuberUnicodeValue += jump;
        }
        encryptedText += String.fromCharCode(parseInt(currentNuberUnicodeValue));
    };
    return encryptedText;
};

// Do not edit below this line
module.exports = caesar;
