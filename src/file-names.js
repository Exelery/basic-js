const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let answer = []
  let count = {}
  names.forEach(e=>{
    if(count[e] || count[e] == 0){
      count[e]++
    } else count[e] = 0
    if(count[e]){
      answer.push(e + `(${count[e]})`)
    } else if(answer.includes(e)){
      answer.push(e + "(1)")
    }else{
      answer.push(e)
    }
      
  })
  return answer
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))