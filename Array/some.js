/**
 * 测试数组中的某些元素是否通过了指定函数的测试。
 *
 * arr.some(callback[, context])
 */

//polyfill
if (!Array.prototype.some) {
    Array.prototype.some = function(fun /*, thisArg */ ) {
        'use strict';

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function')
            throw new TypeError();

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t))
                return true;
        }

        return false;
    };
}


function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough); // passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough); // passed is true
