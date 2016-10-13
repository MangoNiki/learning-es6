/**
 * 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 
 * 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
 *
 * arr.toLocaleString();
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.info(arr.toLocaleString()); //1,2,3,4,5,6,7,8
