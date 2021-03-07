const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length === 0) return false;
  
  var allLetters = [];

  members.forEach(member => {
    if (typeof member === 'string') {
      var oneMemberNames =  member.trim().toUpperCase().split(' ');
      allLetters.push(oneMemberNames[0][0])
    }
  });
  
  if (allLetters.length === 0) return false;

  return allLetters.sort().join('');

};
