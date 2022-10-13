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
function transform(arr) {
    if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
    if (arr.length == 0) return arr
    // let arr = arr.slice()
    let answer = []
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          if (arr[i + 1] && typeof arr[i + 1] == 'number') {
            
            i++
            
          }
          break
        case '--discard-prev':
          if (arr[i - 1] && typeof arr[i - 1] == 'number' && arr[i - 2] != '--discard-next') {
            answer.pop()
          }
          break
        case '--double-next':
          if (arr[i + 1] && typeof arr[i + 1] == 'number') {
            i++
            answer.push(arr[i])
            answer.push(arr[i])
          }
          
          break
        case '--double-prev':
          if (arr[i - 1] && typeof arr[i - 1] == 'number' && arr[i - 2] != '--discard-next') {
            answer.push(arr[i-1])
          }
          break
        default:
          answer.push(arr[i])

      }
    }
    return answer
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
