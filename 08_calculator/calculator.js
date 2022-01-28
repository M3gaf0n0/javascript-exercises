const add = function(num1, num2) {
	var suma = num1 + num2;
	return suma;
};

const subtract = function(num1, num2) {
	var subs = num1 - num2;
	return subs;
};

const sum = function(num1, num2) {
	var sums = num1;
	for (let i=1; i<arguments.length; i++) {
		sums = sums + arguments[i];
	}
	return sums;
	console.log(sums);
};

const multiply = function(num1, num2) {
	var mul = 1;
	for (let i=0; i<arguments.length; i++) {
		mul *= arguments[i];
	}
	return mul;
	console.log(mul);
};

const power = function(num1, num2) {
	var pow = num1;
	for (let i=1; i<num2; i++) {
		pow = pow * num1;
	}
	return pow;
};

const factorial = function(num) {
	var fact = 1;
	for (let i=1; i<=num; i++) {
		fact = fact * i;
	}
	return fact;
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
