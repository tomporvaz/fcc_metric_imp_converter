/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const result;
    const validNumRegex = /^(-?\d+\.\d+\/?\d?)$|^(-?\d+\/?\d?)$/gm;
    const indexOfUnit = input.search(/[a-z]/i);

    console.log(`indexOfUnit: ${indexOfUnit}`);
    result = input.slice(0, indexOfUnit);
    console.log(`getNum Result: ${result}`);
    if(validNumRegex.test(result)){
      return result;
    } else if (result === null){
      return 1;
    } else {
      return 'invalid number';
    };
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
