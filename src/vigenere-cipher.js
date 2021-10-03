import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor( type = true ) { this.typeOfMashine = type; }
   
  encrypt (str,key) {

     if ( str === undefined || key === undefined) { throw new Error('Incorrect arguments!'); }
     
     let strEncrypt = '';
     str = str.toLowerCase();
     key = key.toLowerCase();

     let lengthStr = 0;
     for ( let i = 0; i < str.length; i ++){
   
      if (str[i] >= 'a' && str[i] <= 'z') { lengthStr++; }
    } 

     if ( key.length <= lengthStr) { key = key.repeat( Math.ceil(lengthStr / key.length) ).slice(0,lengthStr); }
     else {  key = key.slice(0,lengthStr); }
     
     let j = 0;
     for (let i = 0; i < str.length; i ++ ){
      if ( str[i] >='a' && str[i] <= 'z' ){ strEncrypt = strEncrypt + String.fromCharCode( (((str.charCodeAt(i) - 97) + (key.charCodeAt(j) - 97))  % 26) + 97); j ++; }
      else { strEncrypt = strEncrypt + str[i]; }

     }
     if (this.typeOfMashine) { return strEncrypt.toUpperCase(); }
     else { return strEncrypt.toUpperCase().split('').reverse().join('');   }
  }


  decrypt(str,key) {

    if ( str === undefined || key === undefined) { throw new Error('Incorrect arguments!'); }

     str = str.toLowerCase();
     key = key.toLowerCase();

     let lengthStr = 0;
     let strDecrypt = '';

     for ( let i = 0; i < str.length; i ++){
   
      if (str[i] >= 'a' && str[i] <= 'z') { lengthStr++; }
    } 

     if ( key.length <= lengthStr) { key = key.repeat( Math.ceil(lengthStr / key.length) ).slice(0,lengthStr); }
     else {  key = key.slice(0,lengthStr); }

     let j = 0;

     for (let i = 0; i < str.length; i ++ ){
      if ( str[i] >='a' && str[i] <= 'z' ){ strDecrypt = strDecrypt + String.fromCharCode( (((str.charCodeAt(i) - 97) - (key.charCodeAt(j) - 97) + 26)  % 26) + 97); j ++; }
      else { strDecrypt = strDecrypt + str[i]; }

     }
     if (this.typeOfMashine) { return strDecrypt.toUpperCase(); }
     else { return strDecrypt.toUpperCase().split('').reverse().join('');   }
  }
}
