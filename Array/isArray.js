/**
 *
 * 方法用来判断某个值是否为Array。如果是，则返回 true，否则返回 false。
 *
 * Array.isArray(value)
 * 
 */

//以下都为true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(Array.prototype);

//以下都为false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });

//兼容写法
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
