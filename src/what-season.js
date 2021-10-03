import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  if ( date === undefined){
    return 'Unable to determine the time of year!' ;
}

Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};

try{ date.isValid();}
catch(err){throw new Error ('Invalid date!');}

 if ( typeof date.getMonth != 'function'  ) {
     throw new Error ('Invalid date!');
}
 else {
   const month = date.getMonth();
   if ( month >=2 && month <=4 )  { return 'spring'; } 
   else if ( month >=5 && month <=7 ) { return 'summer'; }
   else if ( month >= 8 && month <=10 ) { return 'autumn';  }
   else if ( month === 11 || month === 1 || month === 0 ) { return 'winter';  } 
   else { throw new Error ('Invalid date!'); }
 }   
}
