const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink( value='' ) {
    this.chain.push(`( ${value} )`)
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink( position ) {
    if(!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }

    this.chain.splice(position-1, 1)
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    if(this.chain || this.chain.length > 1){
      this.chain = this.chain.reverse()
    }
    return this
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let str = this.chain.join('~~')
     this.chain =[]
    return str
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};



