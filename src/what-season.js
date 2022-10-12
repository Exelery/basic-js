const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  // console.log(date)
  if(!date){
    return 'Unable to determine the time of year!'
  }
  try{
    date.getTime()
  }catch(e){
    throw new Error('Invalid date!');
  }


  const month = date.getMonth()
  let answer
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(month == 11 || month == 0 || month == 1 ){
    answer = 'winter'
  } else if ( month >= 2 && month <=4) {
    answer = 'spring'
  } else if ( month >= 5 && month <=7){
    answer = 'summer'
  } else if ( month >= 8 && month <=10){
    answer = 'autumn'
  } 
  return answer
}

module.exports = {
  getSeason
};

// console.log(getSeason('foo'))
// console.log(getSeason({ John: 'Smith' }))
// console.log(getSeason(20192701))
// console.log(getSeason([2019, '27', 0 + '1']))
// console.log(getSeason(() => new Date()))