// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

function  mfilter (arr, callback) {
    //Ваша реализация метода
    var result = [];
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив');
    if (typeof callback !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию');
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
        callback(result)
    }
    return result;
}

function callback(a) {
    return a > 0;
}


const arr = [1,2,-7,3,-2,4];

let rez = mfilter (arr, callback) //вызов функции
console.log (rez);