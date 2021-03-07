const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(props) {
    if (props === false)
      this.reverse = true
    else
      this.reverse = false
  }
  
  alphabet = ["_", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  shiftRight(index) {
    if (index > this.alphabet.length - 1) {
      return this.alphabet[index % 26]
    }

    if (index < 0) {
      this.alphabet[(26 + index) % 26]
    }

    return this.alphabet[index]
  }

  shiftLeft(shiftSize) {
    let shiftLeft = shiftSize

    if (shiftSize < 0) {
      return this.alphabet[26 + shiftSize + 1]
    }

    if (shiftSize > -1) {
      return this.alphabet[shiftSize + 1]
    }
  }

  repeatKey(msg, key) {
    let a = msg.length 
    let b = key.length

    if (a === b) 
      return key

    let repeat = Math.floor(a / b)
    let mod = a % b
    let result = key.repeat(repeat)
    if (mod > 0)
      result += key.split("").splice(0, mod).join("") 

    return result
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined)
      throw new Error('encrypt(msg, key): wrong params')

    msg = msg.toUpperCase()
    key = key.toUpperCase()
    key = this.repeatKey(msg, key)

    let encrypted = ""
    let keyIndexCorrection = 0

    for (let index = 0; index < msg.length; index++) {
      let msgLetter = msg[index]
      let keyLetter = key[index + keyIndexCorrection]

      let msgLetterIndex = this.alphabet.indexOf(msgLetter)
      let keyLetterIndex = this.alphabet.indexOf(keyLetter)

      if (msgLetterIndex === -1) {
        encrypted += msgLetter
        keyIndexCorrection -= 1
        continue
      }
      

      encrypted += this.shiftRight(msgLetterIndex + keyLetterIndex - 1)
    }

    return this.reverse ? encrypted.split("").reverse().join("") : encrypted
  }    

  decrypt(msg, key) {
    if (msg === undefined || key === undefined)
      throw new Error('decrypt(msg, key): wrong params')

    msg = msg.toUpperCase()
    key = key.toUpperCase()
    key = this.repeatKey(msg, key)  

    let decrypted = ""
    let keyIndexCorrection = 0
    for (let index = 0; index < msg.length; index++) {
      let msgLetter = msg[index]
      let keyLetter = key[index + keyIndexCorrection]
      
      let msgLetterIndex = this.alphabet.indexOf(msgLetter)
      let keyLetterIndex = this.alphabet.indexOf(keyLetter)

      if (msgLetterIndex === -1) {
        decrypted += msgLetter
        keyIndexCorrection -= 1
        continue
      }
      
      let shiftSize = msgLetterIndex - keyLetterIndex
      decrypted += this.shiftLeft(shiftSize)

    }

    return this.reverse ?  decrypted.split("").reverse().join("") : decrypted
  }
}

module.exports = VigenereCipheringMachine;
