import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(arg) {
  
  if (typeof arg != 'string' ) { return false; }

  const par = Number(arg);
  
  if ( isNaN(par) || par <= 0 || par > 15) { return false; }
  
  const ln2 = 0.693; 
  const t2 = 0.693/HALF_LIFE_PERIOD;

  return Math.ceil ((Math.log(MODERN_ACTIVITY/par)) / t2);
}
