const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = "" + str;
  const strRepeat = options.repeatTimes;
  const separator = options.separator || "+";
  
  let addition =  "";
  if (options.hasOwnProperty("addition")) {
    addition = "" + options.addition
  }
    
  const additionRepeatTimes = options.additionRepeatTimes || 0;
  const additionSeparator = options.additionSeparator || "|";

  let compiledAddition = addition;

  for (let index = 1; index < additionRepeatTimes; index++) {
    compiledAddition = compiledAddition + additionSeparator;
    compiledAddition += addition;
  }

  let compiledStr = str + compiledAddition;

  for (let index = 1; index < strRepeat; index++) {
    compiledStr += separator;
    compiledStr += str + compiledAddition;
  }

  return compiledStr;
};
  