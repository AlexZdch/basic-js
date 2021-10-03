import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  const ars1 = s1.split('');
  const ars2 = s2.split('');
  if(ars1.length <= ars2.length){
     return ars1.filter( (item) => {
        if(ars2.indexOf(item) === -1){ return false;  }
        else {
           ars2.splice(ars2.indexOf(item),1);
           return true;
       } 
     }).length;    
  } else{

     return ars2.filter((item) => {
        if(ars1.indexOf(item) === -1){ return false;}
        else {
           ars1.splice(s1.indexOf(item),1);
           return true;
       } 
     }).length;    
    }
}
