const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  let lastmax = 0
  let temp = n.toString().split('');
  // console.log(temp)
  for(let i = 0; i < temp.length; i++){
    let tempArr =[]
    for(let a = 0; a <temp.length; a++) {
      if(a != i){
        tempArr.push(temp[a])
      }
    }
    let current = Number(tempArr.join(''))
    // console.log(current)
    if(lastmax < current ){
      lastmax = current
    }
    
  }
  return lastmax
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(152))
