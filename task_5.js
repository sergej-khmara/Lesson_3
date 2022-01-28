const arr = [1,2,-3,-6,7];
var positiveArr = [];
var k=0;
var arrLenght = arr.length;

function filter(arr, param) {
    if  (!Array.isArray(arr)) throw new Error ('Параметр arr не является массивом');
    if  ( typeof param !== 'function') throw new Error ('Параметр callback не является функцией');
    for (let i = 0; i < arrLenght; i++) {
        if (arr[i] > 0) {
            positiveArr[i - k] = arr[i]
        } else {
            k++
        }
    }
    param(positiveArr);
}
filter(arr, function (number) {
    console.log(number)
})