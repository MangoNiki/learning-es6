/**
 * 将传入的数组或非数组值与原数组合并,组成一个新的数组并返回.
 *
 * var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
 *
 * value:需要与原数组合并的数组或非数组值
 */
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);
console.info(alphaNumeric); //[ 'a', 'b', 'c', 1, 2, 3 ]


var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);
console.info(nums); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.info(alphaNumeric); //[ 'a', 'b', 'c', 1, 2, 3 ]
