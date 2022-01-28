// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
//  Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

//const arr = [1,2,3];
//const acc = 0;
//mreduce (arr, function(arr, item, i, arr) {}, acc);

///const arr = [1,2,-3,-6,7];

function mreduce(arr, item , acc) {

    var arrLenght = arr.length;
    if (!Array.isArray(arr)) throw new Error('Параметр arr не является массивом');
    if (typeof item !== 'function') throw new Error('Параметр callback не является функцией');
    if (typeof acc != 'string' && typeof acc != 'number') throw new Error('Параметр может принимать только строку или число');
    let result = 0;
    for (let i = 0; i < arrLenght; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

function callback(prev, element) {

    prev += element;
    return prev;
}

const arr = [1,2,3,4,2];
const acc = 0;

var m =mreduce(arr,  callback, acc);
console.log(m);







// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
//
// function myreduce(arr, callback, acc) {
//
//
//
//     if (!Array.isArray(arr)) {
//         console.log('Первый параметр обязателен и может принимать только массив');
//         return;
//     }
//     if (typeof callback !== 'function') {
//         console.log(' Второй параметр обязателен и может принимать только функцию');
//         return;
//     }
//     if (typeof acc != 'number' && typeof acc != 'string') {
//         console.log(' Третий параметр обязателен и может принимать только строку или число');
//         return;
//     }
//
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result = callback(result, arr[i]);
//     }
//     return result;
//
// }
//
// function callback(prev, element) {
//     return prev += element;
// }
//
//
//
// const arr = [1,2,3,4,2];
// const acc = 0;
//
// var myreduceArr = myreduce(arr,  callback, acc);
// console.log(myreduceArr);