import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let arrResult = [];

  for(let i = 0; i < n.toString().length; i ++){
      let temp = n.toString().split('');;
      temp.splice(i,1);
      arrResult.push(+( temp.join('')));    
  }
return Math.max(...arrResult);
}
