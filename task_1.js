// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
//  Первый параметр обязателен и может принимать только массив
// Второй параметр обязателен и может принимать только функцию




function forEach(arr, callback) {
    //Ваша реализация метода
    if  (!Array.isArray(arr)) throw new Error ('Первый параметр обязателен и может принимать только массив');
    if  ( typeof callback !== 'function') throw new Error ('Второй параметр обязателен и может принимать только функцию');
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        callback(arr[i], i, arr);
    }
}

function callback (item,i){
    console.log(item, i, arr);
}

 const arr = [1,2,3];

forEach(arr, callback);

//  функция не вынесена из функционала метода
// function forEach(arr, callback) {
//     //Ваша реализация метода
//     if  (!Array.isArray(arr)) throw new Error ('Первый параметр обязателен и может принимать только массив');
//     if  ( typeof callback !== 'function') throw new Error ('Второй параметр обязателен и может принимать только функцию');
//         let i, length = arr.length;
//         for (i = 0; i < length; i = i + 1) {
//              callback(arr[i], i, arr);
//     }
// }

// forEach(arr, function (item, i, arr) {
//     //вызов функции
//     console.log(item, i, arr);
// })
