function roudNumber(decimalNumber) {
  return Math.round(decimalNumber * 10) / 10;
}

const ftoc = function(tempatureF) {
  let convertedTempature = (tempatureF-32)*(5/9);
  convertedTempature = roudNumber(convertedTempature);
  return convertedTempature;
};

const ctof = function(tempatureC) {
  let convertedTempature = (tempatureC * 9/5 + 32)
  convertedTempature = roudNumber(convertedTempature);
  return convertedTempature;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
