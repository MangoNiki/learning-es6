/**
 * 新元素替换旧元素，以此修改数组的内容。
 *
 * array.splice(start, deleteCount[, item1[, item2[, ...]]])
 *
 * 	start​
 * 		从数组的哪一位开始修改内容。
 * 		如果超出了数组的长度，则从数组末尾开始添加内容；
 * 		如果是负值，则表示从数组末位开始的第几位。
 * 	deleteCount
 * 		整数，表示要移除的数组元素的个数。
 * 		如果 deleteCount 是 0，则不移除元素。这种情况下，至少应添加一个新元素。
 * 		如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
 * 	itemN
 * 		要添加进数组的元素。如果不指定，则 splice() 只删除数组元素。
 */

var arr = [1, 2, 3, 4, 5, 6, 7];
console.info(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

// 增加元素
arr.splice(2, 0, 333);
console.info(arr); // [ 1, 2, 333, 3, 4, 5, 6, 7 ]

// 删除元素
arr.splice(2, 3);
console.info(arr); // [ 1, 2, 5, 6, 7 ]

// 修改元素
arr.splice(2, 1, 100);
console.info(arr); // [ 1, 2, 100, 6, 7 ]
