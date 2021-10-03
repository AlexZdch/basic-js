import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  let set = new Set();
  let lengthArr = arr.length;
  arr.forEach((item,index) => { if(item === -1) set.add(index)} );
  arr = arr.filter((item) => item != -1);
  arr.sort((a,b) => a - b ).reverse();
  let result = [];
  let index = 0; 
   while(index < lengthArr){
   if(set.has(index)){
       result.push(-1);
    } else {
        result.push(arr.pop());
    }
   index ++;

   }
  return result;
}
