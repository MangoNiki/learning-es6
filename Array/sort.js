/**
 * 对数组的元素做原地的排序，并返回这个数组。 
 * sort 排序可能是不稳定的。默认按照字符串的Unicode码位点（code point）排序
 *
 * arr.sort([compareFunction])
 * 	compareFunction(a, b)
 * 		可选。用来指定按某种顺序进行排列的函数。
 * 		如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。
 * 		如果 compareFunction 返回值小于 0 ， a 会被排列到 b 之前；
 * 		如果 compareFunction 返回值等于 0 ， a 和 b 的相对位置不变；
 * 		如果 compareFunction 返回值大于 0 ， b 会被排列到 a 之前；
 * 		
 */

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']


var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];

items.sort(function(a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    // a 必须等于 b
    return 0;
});

//对非 ASCII 字符排序
//一些非英语语言的字符串需要使用 String.localeCompare。这个函数可以将函数排序到正确的顺序。

var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function(a, b) {
    return a.localeCompare(b);
});
