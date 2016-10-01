/**
 * 返回一个数组索引的迭代器。
 *
 * arr.keys()
 */

var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 索引迭代器会包含那些没有对应元素的索引
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
console.info(sparseKeys); //[ '0', '2' ]

var denseKeys = [...arr.keys()];
console.log(denseKeys); // [0, 1, 2]
