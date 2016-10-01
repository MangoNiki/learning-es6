/**
 * 将数组中的所有元素连接成一个字符串。
 *
 * str = arr.join([separator = ','])
 * 
 */

var arr = ['niki','jame','bob'];
console.info(arr.join(' ')); //niki jame bob
console.info(arr.join(',')); //niki,jame,bob
console.info(arr.join('@')); //niki@jame@bob
console.info(arr.join('#')); //niki#jame#bob
console.info(arr.join('$')); //niki$jame$bob