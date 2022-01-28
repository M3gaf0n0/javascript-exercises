const ftoc = function(fahr) {
  var cels1=(fahr-32)/1.8;
  var cels2=Math.round(cels1*10) / 10;
  return cels2;
  return cels2;
  console.log(cels2);
};

const ctof = function(cels) {
  var fahr1=(cels*1.8)+32;
  var fahr2=Math.round(fahr1*10) / 10;
  return fahr2;
  console.log(fahr2);
};

/*La funcion Math.round redondea el numero al entero mas cercano, al
multiplicarlo y dividirlo por 10 se logra reddondearlo a un decimal*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
