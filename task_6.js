// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);

function mreduceR(arr, item , acc) {

    if (!Array.isArray(arr)) throw new Error('Параметр arr не является массивом');
    if (typeof item !== 'function') throw new Error('Параметр callback не является функцией');
    if (typeof acc != 'string' && typeof acc != 'number') throw new Error('Параметр может принимать только строку или число');
    let result = 0;
    for (i = 0; i < arr.length; i++) {

        result = callback(result, arr[(arr.length - 1) -i]);
    }
    return result;
}

function callback(prev, element) {

    prev += element;
    return prev;
}

const arr = [1,2,3,4];
const acc = 0;

var m =mreduceR(arr,  callback, acc);
console.log(m);


