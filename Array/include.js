/**
 * 用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
 *
 * var boolean = array.includes(searchElement[, fromIndex])
 *
 */

//Polyfill
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.includes called on null or undefined');
        }

        var O = Object(this);
        var len = parseInt(O.length, 10) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1], 10) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) { k = 0; }
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) {
                return true;
            }
            k++;
        }
        return false;
    };
}


console.info([1, 2, 3].includes(2)); // true
console.info([1, 2, 3].includes(4)); // false
console.info([1, 2, 3].includes(3, 3)); // false
console.info([1, 2, 3].includes(2, -1)); // false
console.info([1, 2, 3].includes(3, -1)); // true
console.info([1, 2, NaN].includes(NaN)); // true
