import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  function transform (element) {

    if (element === true ) { return true;  }
    if ( element === false) {return 1;}
    if (typeof element === 'number'  ) { element = element + 1; return element;}

 }

    const height = matrix.length - 1;
    const width = matrix[0].length - 1;
 
    for(let i = 0; i <= height; i ++) {
       for(let j = 0; j <= width; j ++) {
          if(matrix[i][j] === true){
             if( (i >=0 && i <= width) && (j-1 >=0 && j-1 <= height) ){
                matrix[i][j-1] = transform(matrix[i][j-1]);
             }
             if((i >=0 && i <= width) && (j + 1 >=0 && j + 1 <= height)){
                matrix[i][j+1] = transform(matrix[i][j+1]);
             }
             if((i - 1 >=0 && i - 1 <= width) && (j >=0 && j <= height)){
                matrix[i-1][j] = transform(matrix[i-1][j]);
             }
             if((i + 1 >=0 && i + 1 <= width) && (j >=0 && j <= height)){
                matrix[i+1][j] = transform(matrix[i+1][j]);
             }
 
             if((i - 1 >=0 && i - 1 <= width) && ( j - 1 >=0 && j - 1 <= height)){
                matrix[i-1][j-1] = transform(matrix[i-1][j-1]);
             }
             if((i - 1 >=0 && i - 1 <= width) && (j + 1 >=0 && j + 1 <= height)){
                matrix[i-1][j+1] = transform(matrix[i-1][j+1]);
             }
             if((i + 1 >=0 && i + 1 <= width) && (j - 1 >=0 && j - 1 <= height)){
                matrix[i+1][j-1] = transform(matrix[i+1][j-1]);
             }
             if((i + 1 >=0 && i + 1 <= width) && (j + 1 >=0 && j + 1 <= height)){
                matrix[i+1][j+1] = transform(matrix[i+1][j+1]);
             }
          }
       }
   }

    for(let i = 0; i <= height; i ++) {
       for(let j = 0; j <= width; j ++) {
          if(matrix[i][j] === true){ matrix[i][j] = 1; }
          if(matrix[i][j] === false){ matrix[i][j] = 0; }

       }
    }
return matrix;
}
