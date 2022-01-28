const removeFromArray = function(arrayInicial, arg) {
  var argumentArray = Array.from(arguments);
  var finalArray = arrayInicial.filter((element) => !argumentArray.includes(element));
  /*Esta funcion crea un array con todos los valores del array [arrayInicial]
  que son diferentes a los valores incluidos en el array [argumentArray]*/

  /*for (let i = 0; i<array.length; i++) {
    var currentArg = array[i];
    if (currentArg != arg) {
      finalArray.push(currentArg);
    }
  }*/
  return finalArray;
  console.log(finalArray);
};

// Do not edit below this line
module.exports = removeFromArray;
