/**
 * 让数组的每一项都执行一次给定的函数。
 *
 * array.forEach(callback[, thisArg])
 *
 * 
 */

//Polyfill
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback, thisArg) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}


function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9


function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    // ^---- Note
};

var obj = new Counter();
obj.add([2, 5, 9]);
console.info(obj.count); // 3 
console.info(obj.sum); // 16

//对象复制函数
function copy(obj) {
    var copy = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1); // obj2 looks like obj1 now
