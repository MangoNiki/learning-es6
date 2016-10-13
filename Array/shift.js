/**
 * 删除数组的 第一个 元素，并返回这个元素。该方法会改变数组的长度。
 *
 * arr.shift()
 * 
 */


var arr = [];

var ele = arr.shift();
console.info(arr); // []
console.info(ele); // undefined

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.info(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

ele = arr.shift();
console.info(ele); // 1
console.info(arr); //[ 2, 3, 4, 5, 6, 7, 8, 9 ]
