/**
 * 会浅拷贝数组的部分元素到同一数组的不同位置，且不改变数组的大小，返回该数组。
 *
 * arr.copyWithin(target[, start[, end]])
 * 
 */

console.info([1, 2, 3, 4, 5].copyWithin(-1)); //[ 1, 2, 3, 4, 1 ]
console.info([1, 2, 3, 4, 5].copyWithin(-2)); //[ 1, 2, 3, 1, 2 ]
console.info([1, 2, 3, 4, 5].copyWithin(-3)); //[ 1, 2, 1, 2, 3 ]
console.info([1, 2, 3, 4, 5].copyWithin(-4)); //[ 1, 1, 2, 3, 4 ]
console.info([1, 2, 3, 4, 5].copyWithin(-5)); //[ 1, 2, 3, 4, 5 ]
console.info([1, 2, 3, 4, 5].copyWithin(-6)); //[ 1, 2, 3, 4, 5 ]

console.info([1, 2, 3, 4, 5].copyWithin(0,3)); //[ 4, 5, 3, 4, 5 ]
console.info([1, 2, 3, 4, 5].copyWithin(0,3,4)); //[ 4, 2, 3, 4, 5 ]
