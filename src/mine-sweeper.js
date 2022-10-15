const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let answer = []
  matrix.forEach((e, row)=> {
    let tempArr = []
    
    e.forEach((c, column)=> {
      let count = 0
      for(let i = -1; i < 2; i++){
        for(let b = -1; b < 2; b++){
          // let el = 
          // console.log(e + i)
          if(matrix[row + i]){
            // console.log(2)
            if(matrix[row + i][column + b] && !(i ==0 && b == 0)){
              count += matrix[row + i][column + b]
              // console.log(1)
            }
          }
          
        }
      }
      tempArr.push(count)

    }) 
    answer.push(tempArr)
  })

  return answer
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};

matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ]

console.log(minesweeper(matrix))