const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 0

    for (let index = 0; index < arr.length; index++) {

      if (!Array.isArray(arr[index])) {
        continue
      }

      let depthX = this.calculateDepth(arr[index])

      if (depthX > maxDepth) {
        maxDepth = depthX
      }

    }
    
    return maxDepth + 1
  }
}