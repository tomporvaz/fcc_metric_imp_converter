/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    const validNumRegex = /^(-?\d+\.\d+\/?\d*)$|^(-?\d+\/?\d*)$/gm;
    const indexOfUnit = input.search(/[a-z]/i);

    console.log(`indexOfUnit: ${indexOfUnit}`);
    result = input.slice(0, indexOfUnit);
    if(validNumRegex.test(result)){
      console.log(`getNum return: ${result}`);
      return result;
    } else if (!result){
      console.log(`getNum return: 1`);
      return 1;
    } else {
      console.log(`getNum return: invalid number`);
      return 'invalid number';
    };
  };
  
  this.getUnit = function(input) {
    var result;
    const indexOfUnit = input.search(/[a-z]/i);
    const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

    console.log(`indexOfUnit: ${indexOfUnit}`);
    result = input.slice(indexOfUnit);
    console.log(`getUnit return: ${result}`);

    if (validUnits.includes(result)){
      return result;
    } else {
      console.log(`getUnit return: invalid unit`);
      return 'invalid unit';
    }
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
