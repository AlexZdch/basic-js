import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address( n ) {
  n = n.split('-'); 
  console.log(n);
  for(let i = 0; i < n.length; i ++ ){
      if(n[i].length != 2) {return false; }
      let current = n[i];
      current = current.split('');

      if( !((current[0] >= '0' && current[0] <= '9') || (current[0] >= 'A' && current[0] <= 'F')) ) { return false;}      
      if( !((current[1] >= '0' && current[1] <= '9') || (current[1] >= 'A' && current[1] <= 'F')) ) { return false;}      

  }
return true;
}
