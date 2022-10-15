const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let zeros ={}
  let sum = 0
  matrix.forEach(e =>{
    e.forEach((t, index) =>{
      if(t == 0){
        zeros[index] = 1
      }
      if( !zeros[index]){
        sum+= t
      }
    })
  })
  return sum
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};

matrix = [
    [0, 1, 1, 2],
   [0, 5, 0, 0],
    [2, 0, 3, 3]
   ]

  //  console.log(getMatrixElementsSum(matrix))