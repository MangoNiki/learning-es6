/**
 * 在数组的开头添加一个或者多个元素，并返回数组新的 length 值
 *
 * arr.unshift(element1, ..., elementN)
 *
 */

var arr = [];
console.info(arr.unshift(1, 2)); // 2
console.info(arr); //[ 1, 2 ]

console.info(arr.unshift(3, 4, 5)); // 5
console.info(arr); // [ 3, 4, 5, 1, 2 ]
