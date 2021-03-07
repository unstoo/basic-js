const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not an array');
  if (arr.length === 0) return [];

  var transformed = [];

  arr.forEach((value, index) => {
    if (
      value === '--discard-prev' || 
      value === '--double-prev'||
      value === '--discard-next' ||
      value === '--double-next')
    {
      transformed.push({
        ctrl: value
      });
    } else {
      transformed.push({
        number: value,
        multiplier: 1
      });
    } 
  });

  transformed.forEach((obj, index) => {
    if (obj.ctrl === '--discard-prev' && index > 0) {
      transformed[index - 1].multiplier -= 1;
    }
    if (obj.ctrl === '--double-prev' && index > 0) {
      if (transformed[index - 1].multiplier !== 0)
        transformed[index - 1].multiplier += 1;
    }
    if (obj.ctrl === '--discard-next'  && index < transformed.length -1) {
      transformed[index + 1].multiplier -= 1;
    }
    if (obj.ctrl === '--double-next' && index < transformed.length -1) {
      transformed[index + 1].multiplier += 1;
    }     
  });

  var result = [];

  transformed.forEach((obj, index) => {
    if (obj.multiplier > 0) {
      var multipleNumbers = Array(obj.multiplier).fill(obj.number);
      result = result.concat(multipleNumbers);
    } 
  });

  return result
};
