const { computed } = require('vue');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  try{
    if(arr.length == 0) return arr
    let copy = arr.slice()
    let answer = []
    for(let i in copy){
      switch(copy[i]){
        case '--discard-next':
          if(copy[i+1] &&  typeof copy[i+1] == 'number') {
            copy.splice(i+1, 1)
            console.log(copy)
          }
        break
        case '--discard-prev':
          if(copy[i-1] &&  typeof copy[i-1] == 'number') copy.splice(i-1, 1)
        break
        case '--double-next':
          if(copy[i+1] &&  typeof copy[i+1] == 'number') copy.splice(i+1, 0, copy[i+1])
        break
        case '--double-prev':
          if(copy[i-1] &&  typeof copy[i-1] == 'number') copy.splice(i-1, 0, copy[i-1])
        break

      }
      return copy.filter(Number)
    }
  }catch (e){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
console.log((1337 &&  typeof 1337 == 'number'))
