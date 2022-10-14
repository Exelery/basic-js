const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }

  generateKey(str, key) {

    key = key.split("");
    if (str.length == key.length)
      return key.join("");
    else {
      let temp = key.length;
      for (let i = 0; i < (str.length - temp); i++) {
        key.push(key[i % ((key).length)])
      }
    }
    return key.join("");
  }
  encrypt(str, key) {
    if(!str || !key){
      throw new Error('Incorrect arguments!')
    }

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    key = this.generateKey(str, key)
    key = key.toUpperCase()
    str = str.toUpperCase()
    let cipher = "";
    let temp = 0

    for (let i = 0; i < str.length; i++) {
      if (ABC.includes(str[i])) {
        let x = (str[i].charCodeAt(0) + key[temp].charCodeAt(0)) % 26;

        // convert into alphabets(ASCII)
        x += 'A'.charCodeAt(0);

        cipher += String.fromCharCode(x);
        temp++
      } else {
        cipher += str[i]
      }


    }
    if (this.direct) {
      return cipher;
    } else {
      return cipher.split('').reverse().join('')
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(chiper, key) {
    if(!chiper || !key){
      throw new Error('Incorrect arguments!')
    }
    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let answer =''
    key = this.generateKey(chiper, key)
    key = key.toUpperCase()
    chiper = chiper.toUpperCase()
    let temp = 0
      for (let i = 0; i < chiper.length; i++) {
        if (ABC.includes(chiper[i])) {
          let x = (chiper[i].charCodeAt(0) - key[temp].charCodeAt(0) + 26) % 26;

          // convert into alphabets(ASCII)
          x += 'A'.charCodeAt(0);

          answer += String.fromCharCode(x);
          temp++
        } else {
          answer += chiper[i]
        }
      }
      if (this.direct) {
        return answer;
      } else {
        return answer.split('').reverse().join('')
      }


      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here

    }
  
}

    module.exports = {
      VigenereCipheringMachine
    };


    let test = new VigenereCipheringMachine()

    console.log(test.encrypt('attack at dawn!', 'alphonse'))
    console.log(test.decrypt('AEIHQX SX DLLU!', 'alphonse'))

    let reverseMachine = new VigenereCipheringMachine(false)

    console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))// => '!ULLD XS XQHIEA')
    console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
    
     // => '!NWAD TA KCATTA'