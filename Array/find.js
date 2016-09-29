/**
 * 如果数组中某个元素满足测试条件，find() 方法就会返回那个元素的值，如果没有满足条件的元素，则返回 undefined。
 *
 * 区别：findIndex()方法返回的是满足条件的元素的索引，而非它的值。
 *
 * arr.find(callback[, thisArg])
 * 
 */

//Polyfill
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
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
                return value;
            }
        }
        return undefined;
    };
}

var inventory = [{
    name: 'apples',
    quantity: 2
}, {
    name: 'bananas',
    quantity: 0
}, {
    name: 'cherries',
    quantity: 5
}];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries)); //{ name: 'cherries', quantity: 5 }


//查找指数
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
