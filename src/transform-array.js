import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
    
  const  DISCARD_NEXT = '--discard-next';
  const  DISCARD_PREV = '--discard-prev';
  const  DOUBLE_NEXT = '--double-next';
  const  DOUBLE_PREV = '--double-prev';

  let arrResult = [];
  if( typeof arr.join() != 'string' ){
   
     throw new Error('\'arr\' parameter must be an instance of the Array!');
   
  } 
  let j = 0;
  for (let i = 0; i < arr.length; i ++){

     switch ( arr[i] ){

      case DISCARD_NEXT: 

         if ( (i + 1) < arr.length ){
            i ++;
          } 

      break;

      case DISCARD_PREV: 

         if ( (i - 1) >= 0 && arr[i-2] != DISCARD_NEXT ){
            arrResult.pop();
            j --;
          } 

      break;

      case DOUBLE_NEXT: 

         if ( (i + 1) < arr.length ){

           arrResult[j] = arr[i+1];
           j++;

          } 

      break;

      case DOUBLE_PREV: 

         if ( (i - 1) >= 0 && arr[i-2] != DISCARD_NEXT ){
           
           arrResult[j] = arr[i-1];
           j++;
          } 
      break;

      default: 
 
         arrResult[j] = arr[i];
         j++;       

      break;
     }   
   }

return arrResult;

}
