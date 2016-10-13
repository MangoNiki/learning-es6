/**
 * 会浅复制（shallow copy）数组的一部分到一个新的数组，并返回这个新数组
 *
 * arr.slice(begin, [end])
 */

var arr = [1, 2, 3, 4, 5, 6];
console.info(arr); // [1, 2, 3, 4, 5, 6]

var newArr = arr.slice(1, 2);
console.info(arr); // [1, 2, 3, 4, 5, 6]
console.info(newArr); // 2

newArr = arr.slice();
console.info(newArr); // [1, 2, 3, 4, 5, 6]

newArr = arr.slice(0);
console.info(newArr); // [1, 2, 3, 4, 5, 6]

newArr = arr.slice(-2);
console.info(newArr); // [ 5, 6 ]

newArr = arr.slice(-2, 1);
console.info(newArr); // [ ]

newArr = arr.slice(1, -2);
console.info(newArr); // [ 2, 3, 4 ]
