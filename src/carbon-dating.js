const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 

const LN = Math.LN2;
const HALF_LIFE_PERIOD= 5730;
const K = LN / HALF_LIFE_PERIOD

module.exports = function dateSample(sample) {
  if (!sample)
    return false

  if (typeof sample !== "string")
    return false
  
  sample = Number.parseFloat(sample)

  if (!Number.isFinite(sample)) {
    return false
  }

  if (sample < 1 || sample > MODERN_ACTIVITY)
    return false

    const NOM = Math.log(MODERN_ACTIVITY / sample)
    return  Math.ceil(NOM / K)
};




function x(sample) {
  if (!sample)
    return false

  if (typeof sample !== "string")
    return false
    
  sample = Number.parseFloat(sample)

  

  if (sample < 1 || sample > MODERN_ACTIVITY)
    return false

    

};
