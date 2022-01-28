const reverseString = function(str) {
  var splitStr = str.split("");
  var reverseStr = splitStr.reverse();
  var joinStr = reverseStr.join("");
  return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
