/**
 * 用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组
 *
 * var new_arrary = arr.filter(callback[, thisArg])
 * 
 */

function isBigEnough(element) {
    return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.info(filtered); //[ 12, 130, 44 ]
