/**
 * 可以将一个数组中指定区间的所有元素的值, 都替换成或者说填充成为某个固定的值。
 *
 * arr.fill(value[, start = 0[, end = this.length]])
 * 
 */
if (!Array.prototype.fill) {
    Array.prototype.fill = function(value) {

        // Steps 1-2.
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        // Steps 3-5.
        var len = O.length >>> 0; // parseInt(O.length)

        // Steps 6-7.
        var start = arguments[1];
        var relativeStart = start >> 0;

        // Step 8.
        var k = relativeStart < 0 ?
            Math.max(len + relativeStart, 0) :
            Math.min(relativeStart, len);

        // Steps 9-10.
        var end = arguments[2];
        var relativeEnd = end === undefined ?
            len :
            end >> 0;

        // Step 11.
        var final = relativeEnd < 0 ?
            Math.max(len + relativeEnd, 0) :
            Math.min(relativeEnd, len);

        // Step 12.
        while (k < final) {
            O[k] = value;
            k++;
        }

        // Step 13.
        return O;
    };
}
console.info([1, 2, 3].fill(4)); //[4, 4, 4]
console.info([1, 2, 3].fill(4, 1)); //[1, 4, 4]
console.info([1, 2, 3].fill(4, 1, 2)); //[1, 4, 3]
console.info([1, 2, 3].fill(4, 1, 1)); //[1, 2, 3]
console.info([1, 2, 3].fill(4, -3, -2)); //[4, 2, 3]
console.info([1, 2, 3].fill(4, NaN, NaN)); //[1, 2, 3]
console.info(Array(3).fill(4)); //
console.info([].fill.call({ length: 3 }, 4)); //{ '0': 4, '1': 4, '2': 4, length: 3 }
