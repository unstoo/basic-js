const CustomError = require("../extensions/custom-error");

const chainMaker = {
  _links: [],
  getLength() {
    let result = this._links.length
    this._links = []
    return result
  },

  addLink(value) {
    if (!value) {
      value += ""
    }

    this._links.push(value)
    return this
  },

  removeLink(position) {
    if (Number.isInteger(position) === false) {
      this._links = []
      throw new Error('removeLink(integer): received wrong parameter')
    }
    if (position < 1 || position > this._links.length) {
      this._links = []
      throw new Error('removeLink(integer): received wrong parameter')
    }
    
    this._links.splice(position - 1, 1)

    return this
  },

  reverseChain() {
    this._links.reverse()
    return this
  },

  finishChain() {

    let renderedChain = this._links.map(link => {
      return "( " + link + " )"
    })

    renderedChain = renderedChain.join("~~")

    this._links = []

    return renderedChain
  }
};



module.exports = chainMaker;
