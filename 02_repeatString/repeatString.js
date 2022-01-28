const repeatString = function(string, num) {
  var str = "";
  if (num>=0){
    while (num > 0) {
      str += string;
      num --;
    }
    return str;
  } else {
      return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
