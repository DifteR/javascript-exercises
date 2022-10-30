const add = function() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
    
  }
	return result;
};

const subtract = function(x,y) {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result -= arguments[i];
    
  }
	return result;
};

const sum = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    
  }
	return result;
};

const multiply = function(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
    
  }
	return result;

};

const power = function(number,raiser) {
  let result = number;
  for (let i = 1; i < raiser; i++) {
    result *= number;
  }
	return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = 0; num > 0; num--) {
    result *= num;
    
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
