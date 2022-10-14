const repeatString = function (repeatedPhase, numberOfRepeats) {
  let outputString = "";
  if (numberOfRepeats < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < numberOfRepeats; i++) {
      outputString += repeatedPhase;
    }
    return outputString;
  }
};

// Do not edit below this line
module.exports = repeatString;
