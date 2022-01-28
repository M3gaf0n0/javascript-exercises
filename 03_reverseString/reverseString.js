const reverseString = function(str) {
  var splitStr = str.split("");
  var reverseStr = splitStr.reverse();
  var joinStr = reverseStr.join("");
  return joinStr;
};
/*.split divide la cadena en subcadenas (tipo array) con el separador "";
.reverse invierte el orden de un array;
.join une los elementos de un array con el separador "";*/

// Do not edit below this line
module.exports = reverseString;
