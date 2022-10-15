const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(){
    this.depth = 0
    this.max = 0
  }
  
  calculateDepth( arr ) {
    // return Array.isArray(arr) ? 
    // 1 + Math.max(0, ...arr.map(this.calculateDepth)) : 0;

    let max = 1
    arr.forEach(e=>{
      let depth = 1
      if(Array.isArray(e)){
        depth = depth + this.calculateDepth(e)
      }
      if(depth > max){
        max = depth
      }
      
    })
    return max
  }
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();
console.log( depthCalc.calculateDepth([[[]]]) )
