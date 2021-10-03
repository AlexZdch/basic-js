import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  let i = 0;
  let strResult = '';

   while( i < str.length ){

      let current = str[i];
      let index = i + 1; 
      let count = 1;
      while (str[i] === str[index]){
         count ++;
         index ++;        
      } 
   if(count === 1) {    strResult += current;} else{
    strResult += count + current;
   }
    i = index;    
   }
return strResult;
}
