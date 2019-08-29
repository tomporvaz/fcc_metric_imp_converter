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
    const keyObj = {
      'gal': 'l',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    }

    console.log(`initUnit: ${initUnit}`)
    const initUnitLowercase = initUnit.toLowerCase();
    console.log(`getReturnUnit return ${keyObj[initUnitLowercase]}`)
    return keyObj[initUnitLowercase];
  };

  this.spellOutUnit = function(unit) {
    const keyObj = {
      'gal': 'gallons',
      'l': 'litters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };

    return keyObj[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversionFactor = {
      'gal': galToL,
      'l': 1/galToL,
      'mi': miToKm,
      'km': 1/miToKm,
      'lbs': lbsToKg,
      'kg': 1/lbsToKg
    }

    //convert complex fractions to decimal number
    const complexFractionRegEx = /^(\d+\.\d*\/\d+)$/;
    if(complexFractionRegEx.test(initNum)){
      const indexOfDecimal = initNum.search(/\./); 
      const integer = initNum.slice(0, indexOfDecimal);
      const fraction = initNum.slice(indexOfDecimal + 1);
      const splitFraction = fraction.split('/');
      const fractionDecimal = parseInt(splitFraction[0], 10) / parseInt(splitFraction[1], 10);
      const decimalNumber = parseInt(integer, 10) + fractionDecimal; 
      
      console.log(`initNum: ${initNum}; typeOf initNum: ${typeof(initNum)}`)
      console.log(`indexOfDecimal: ${indexOfDecimal}`);
      console.log(`integer: ${integer}`);
      console.log(`fraction: ${fraction}`);
      console.log(`splitFraction: ${splitFraction}`);
      console.log(`fractionDecimal: ${fractionDecimal}`);
      console.log(`decimalNumber ${decimalNumber}`);
      console.log(`return from complexFraction: ${decimalNumber * conversionFactor[initUnit]}`)
      
      return decimalNumber * conversionFactor[initUnit];

    }  else {

      return initNum * conversionFactor[initUnit];

    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = (
      `${initNum} ${spellOutUnit(initUnit)} converts to ${returnNum} ${spellOutUnit(returnUnit)}`
      );
    
    return result;
  };
  
}

module.exports = ConvertHandler;
