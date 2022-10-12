const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let answer = []
  if(Array.isArray(members)){
    for(el of  members){
      if(typeof el  == 'string'){
        el = el.replace( /\s/g, '')
        if(el.charAt(0).toUpperCase() != el.charAt(0).toLowerCase()){
          answer.push(el.charAt(0).toUpperCase())
        }
      }
    }
  }
  
  if (answer.length == 0) return false
  return answer.sort().join('')
}

module.exports = {
  createDreamTeam
};
