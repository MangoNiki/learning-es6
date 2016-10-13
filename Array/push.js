/**
 * 添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）
 *
 * arr.push(element1, ..., elementN)
 * 
 */
var arr = [];

console.info(arr.push('a')); // 1
console.info(arr); //[ 'a' ]

console.info(arr.push('b', 'c', 'd')); // 4
console.info(arr); //[ 'a', 'b', 'c', 'd' ]
