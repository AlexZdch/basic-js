import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {};
  domains = domains.map( (item) =>  item.split('.').reverse().join('.')).sort((a,b) => b.length - a.length);
 
   for(let i = 0; i < domains.length; i ++){
       let str = domains[i];
       do{        
           let key = "." + str;
           if(!(key in obj)) { obj[key] = domains.filter( (item) =>  item.includes(str)).length; }
           let index = str.lastIndexOf('.');        
           if(index == -1) break;
           str = str.slice(0,index);
          }while(1) ; 
 
  }
 return obj;
 
}
