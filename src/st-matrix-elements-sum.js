import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  const height = matrix.length;
  const width = matrix[0].length;


  let sum = 0;
  
  for(let i = 0; i < width; i ++ ){
      let j = 0;
     while (j < height && matrix[j][i] != 0){
//console.log(matrix[j][i]);

        sum += matrix[j][i];
        j ++ ;    
     }     

  }  
return sum;
}
