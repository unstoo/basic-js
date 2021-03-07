const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  var year = date.getYear();
  var month = date.getMonth();
  if (year > 0) {
    if ([11, 12, 1].includes(month)) return 'winter';
    if ([2, 3, 4].includes(month)) return 'spring';
    if ([5, 6, 7].includes(month)) return 'summer';
    if ([8, 9, 10].includes(month)) return 'autumn';
  } else {
    if ([11, 0, 1].includes(month)) return 'winter';
    if ([2, 3, 4].includes(month)) return 'spring';
    if ([5, 6, 7].includes(month)) return 'summer';
    if ([8, 9, 10].includes(month)) return 'autumn';
  }
};
