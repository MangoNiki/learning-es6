/**
 * 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。
 *
 * arr.values()
 */

var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
// 您的浏览器必须支持 for..of 循环
// 以及 let —— 将变量作用域限定在 for 循环中
for (let letter of eArr) {
    console.log(letter);
}


var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
