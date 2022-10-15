const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  str = str + ''
  let answer = []
  let optional = ''
  let temp =[]
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1
  }
  if(options.additionRepeatTimes){
    for(let a = 0; a < options.additionRepeatTimes; a++){
        temp.push( options.addition || (options.addition + '') != 'undefined' ? options.addition + '': '')
      }
      optional = temp.join(options.additionSeparator? options.additionSeparator: '|')
  }
  
  temp = options.addition? options.addition.toString(): ''
  if(!options.repeatTimes || !(typeof options.repeatTimes == 'number')){
    options.repeatTimes = 1
  }
  for(let i = 0; i < options.repeatTimes; i++){
    
    answer.push(str + optional)
    
  }

  return answer.join(options.separator? options.separator: '+')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', 
//  addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }) );
//== 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'