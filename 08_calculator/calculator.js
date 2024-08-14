const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((accum, current) => accum + current, 0);
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(base, exp) {
	let total = 0;
  for (i = 0; i < exp; i++) {
    total *= base;
  }
};

const factorial = function(n) {
	if (n = 0) return 1;

  let product = 1;
  for (i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
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
