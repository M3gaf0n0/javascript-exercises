const sumAll = function(num1, num2) {
  const numArray = [];
  var sum = 0;
  /*La funcion evalua si los valores de [num1] y [num2] son mayores o iguales a
  0, y despues evalua si los valores de [num1] y [num2] son de tipo numero.
  Si alguno de las dos condiciones no se cumple, automaticamente imprime
  "ERROR"*/
  if((num1>=0 && num2>=0) && (typeof num1 == 'number' && typeof num2 == 'number')) {
    if(num1<num2){
      for (let i = num1; i<= num2; i++) {
        numArray.push(i);
      }
      for (let j = 0; j<numArray.length; j++) {
        sum = sum + numArray[j];
      }
      return sum;
      control.log(sum);
    } else {
      for (let i = num1; i>= num2; i--) {
        numArray.push(i);
      }
      for (let j = 0; j<numArray.length; j++) {
        sum = sum + numArray[j];
      }
      return sum;
      control.log(sum);
    }
 } else {
   return "ERROR";
 }
};

// Do not edit below this line
module.exports = sumAll;
