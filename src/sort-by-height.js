const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  // throw new NotImplementedError('Not implemented');
  let filtered = arr.filter(e=> e != -1)
  filtered = filtered.sort((a, b)=> a - b)
    
  let answer = []
  let count = 0
  arr.forEach(e=>{
    if(e == -1){
      answer.push(e)
    }else {
      answer.push(filtered[count])
      count++
    }
  })
  return answer

  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};

arr = [4, 2, 9, 11, 2, 16]
// console.log(sortByHeight(arr))