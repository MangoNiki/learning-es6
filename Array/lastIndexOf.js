/**
 * 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
 * 
 * arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
 * 
 */

var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2); // index is 3
index = array.lastIndexOf(7); // index is -1
index = array.lastIndexOf(2, 3); // index is 3
index = array.lastIndexOf(2, 2); // index is 0
index = array.lastIndexOf(2, -2); // index is 0
index = array.lastIndexOf(2, -1); // index is 3


//查找所有元素
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);

while (idx != -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
console.log(indices); // [4, 2, 0];
