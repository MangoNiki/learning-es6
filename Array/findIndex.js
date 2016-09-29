/**
 * 用来查找数组中某指定元素的索引, 如果找不到指定的元素, 则返回 -1
 *
 * arr.findIndex(callback[, thisArg])
 * 
 */

//Polyfill
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(predicate) {
        if (this === null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}

//寻找质数
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) return false;
    }
    return (element > 1);
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
