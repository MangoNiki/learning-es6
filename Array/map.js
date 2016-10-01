/**
 * 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
 *
 * array.map(callback[, thisArg])
 * 
 */

function fuzzyPlural(single) {
    var result = single.replace(/o/g, 'e');
    if (single === 'kangaroo') {
        result += 'se';
    }
    return result;
}

var words = ["foot", "goose", "moose", "kangaroo"];

console.info(["1", "2", "3"].map(parseInt)); //[1, NaN, NaN]
// 通常使用parseInt时,只需要传递一个参数.但实际上,parseInt可以有两个参数.第二个参数是进制数.可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

//应该使用如下的用户函数returnInt
function returnInt(element) {
    return parseInt(element, 10);
}
console.info(["1", "2", "3"].map(returnInt)); // 返回[1,2,3]
