/**
 * 返回给定元素能找在数组中找到的第一个索引值，否则返回-1。
 *
 * arr.indexOf(searchElement[, fromIndex = 0])
 * 
 */

//找出指定元素出现的所有位置
var array = [2, 5, 9];
console.info(array.indexOf(2)); // 0
console.info(array.indexOf(7)); // -1
console.info(array.indexOf(9, 2)); // 2
console.info(array.indexOf(2, -1)); // -1
console.info(array.indexOf(2, -3)); // 0

//判断一个元素是否在数组里，不在则更新数组
function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('new');
    } else if (veggies.indexOf(veggie) > -1) {
        console.log('already exists');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];


updateVegetablesCollection(veggies, 'spinach'); // new
updateVegetablesCollection(veggies, 'spinach'); // already exists
