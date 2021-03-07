const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length === 0) return 0;
  var catsCount = 0;
  matrix.forEach(row => {
    row.forEach(cell => {
      if (cell === '^^') ++catsCount
    })
  });

  return catsCount;
};
