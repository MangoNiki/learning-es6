/**
 * 方法返回一个 Array Iterator 对象，该对象包含数组中每一个索引的键值对
 *
 * arr.entries()
 * 
 */

var arr = ["a", "b", "c"];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, "a"]
console.log(eArr.next().value); // [1, "b"]
console.log(eArr.next().value); // [2, "c"]
console.log(eArr.next().value); // undefined