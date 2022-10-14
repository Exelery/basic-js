const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let tempStr = str.split('')
  let answer = []
  let count = 1
  for(let i = 0; i < tempStr.length; i++){
    if(tempStr[i+1] != tempStr[i]){
      if(count >1){
        answer.push(count)
      }
      answer.push(tempStr[i])
      count = 1
    }else{
      count++
    }
  }
  return answer.join('')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

console.log(encodeLine('aabbbc'))