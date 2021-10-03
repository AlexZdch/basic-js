import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  if ( str === null ) { str = 'null'; }
  if ( typeof str != 'string' ) { str.toString(); }
  if ( options.addition === null ) { options.addition = 'null'; }
  if ( typeof options.addition != 'string' && options.addition != undefined ) { options.addition.toString(); }
  if ( options.separator === undefined ) { options.separator = '+' ; }
  if ( options.additionSeparator === undefined ) { options.additionSeparator = '|' ; }
  if ( options.repeatTimes === undefined ) { options.repeatTimes = 0; }
  if ( options.additionRepeatTimes === undefined ) { options.additionRepeatTimes = 0; }
 

  if (options.addition != undefined){ 

     var strAddition = options.addition;
     let strTempAddition = options.additionSeparator + options.addition; 

     for ( let i = 0 ; i < options.additionRepeatTimes - 1; i ++ ){

        strAddition = strAddition + strTempAddition;   

     }
  }else { strAddition = '';}
  
     let strEnter = str + strAddition;

     let strTempEnter = options.separator + strEnter; 

     for ( let i = 0 ; i < options.repeatTimes - 1; i ++ ){

        strEnter = strEnter + strTempEnter;   

     }

return strEnter;

}
