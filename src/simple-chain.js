import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  str: '',
  getLength() {
    return this.str.split('~~').length;
  },
  addLink( value ) {
    if ( arguments.length === 0 ) { value = ''; }
    if (value === null) {value = 'null'};
    if ( this.str ) {
       this.str = `${this.str}~~( ${value.toString()} )`;
    } else {
       this.str = `( ${value.toString()} )`;
    }
   return this;
  },
  removeLink( position ) {
    let arr = [];
    arr = this.str.split('~~');
    if ( (typeof position === 'number') && ((position - 1) < arr.length) && ((position - 1) >=0) && ((position ^ 0) === position) ) {
   
    arr.splice((position -1),1);
    this.str = arr.join('~~');    

   }else {
   this.str = '';
   throw new Error('You can\'t remove incorrect link!');

  }
    return this;
  },
  reverseChain() {

    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const strResult = this.str;
    this.str = '';
    return strResult;
  }
};
