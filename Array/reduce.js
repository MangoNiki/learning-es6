/**
 * 接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。
 *
 * arr.reduce(callback,[initialValue])
 *
 * 	callback			:执行数组中每个值的函数，包含四个参数
 * 		previousValue	:上一次调用回调返回的值，或者是提供的初始值（initialValue）
 * 		currentValue	:数组中当前被处理的元素
 * 		index 			:当前元素在数组中的索引
 * 		array			:调用 reduce 的数组
 * 		
 * 	initialValue		:作为第一次调用 callback 的第一个参数。
 */


var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var res = nums.reduce(function(prevVal, nextVal, index, arr) {
    return prevVal + nextVal;
});
console.info(res); //55


res = nums.reduce(function(prevVal, nextVal, index, arr) {
    return prevVal + nextVal;
}, 100);
console.info(res); //155

var fruits = ['apple'];

//如果数组为空并且没有提供initialValue， 会抛出TypeError 。
//如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。
fruits.reduce(function(prevVal, nextVal, index, arr) {
    console.info(prevVal); //不会输出
});

fruits.reduce(function(prevVal, nextVal, index, arr) {
    console.info(prevVal); //orange
}, 'orange');

//TypeError: Reduce of empty array with no initial value
[].reduce(function(prevVal, nextVal, index, arr) {
    console.info(prevVal); //orange
});
