/**
 * 将它的任意类型的多个参数放在一个数组里并返回。
 *
 * Array.of(element0[, element1[, ...[, elementN]]])
 *
 * 
 */

if (!Array.of) {
    Array.of = function() {
        return Array.prototype.slice.call(arguments);
    };
}

console.info(Array.of(1)); //[ 1 ]
console.info(Array.of(1, 2, 3)); //[ 1, 2, 3 ]
console.info(Array.of(undefined)); //[ undefined ]
