/**
 *
 * 作用：将一个类数组对象或可遍历对象转换成真正的数组
 * 
 * Array.from(arrayLike[, mapFn[, thisArg]])
 *
 * 	arrayLike	：想要转换成真实数组的类数组对象或可遍历对象。
 *  mapFn		：如果指定了该参数，则最后生成的数组会经过该函数的加工处理后再返回。
 *  thisArg		：执行 mapFn 函数时 this 的值。
 *  
 */

// 将类数组对象（arguments）转换成数组
(function() {
    console.info(arguments); //{ '0': 1, '1': 2, '2': 3 }
    var args = Array.from(arguments);
    console.info(args); //[ 1, 2, 3 ]
})(1, 2, 3);

// 将可迭代对象（Set 对象）转换成数组
var res = Array.from(new Set(["foo", "niki"]));
console.info(res); //[ 'foo', 'niki' ]

// Map 对象也可以
var res = Array.from(new Map([
    [1, 2],
    [2, 4],
    [4, 8]
]));
console.info(res); //[ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]


// 字符串对象既是类数组又是可迭代对象
var res = Array.from("foo");
console.info(res); //[ 'f', 'o', 'o' ]

// 使用 map 函数转换数组元素
var res = Array.from([1, 2, 3], x => x + x);
console.info(res); //[ 2, 4, 6 ]

// 生成一个数字序列
var res = Array.from({ length: 5 }, (v, k) => k);
console.info(res); //[ 0, 1, 2, 3, 4 ]
