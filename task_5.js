// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
//  Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

const arr = [1,2,3];
const acc = 0;
mreduce(arr, function(acc, item, i, arr) {}, acc);

///const arr = [1,2,-3,-6,7];

function mreduce(arr, param , acc) {
    var summ =0 ;
    var arrLenght = arr.length;
    if  (!Array.isArray(arr)) throw new Error ('Параметр arr не является массивом');
    if  ( typeof function !== 'function') throw new Error ('Параметр callback не является функцией');
    if  ( typeof acc != 'string' && typeof acc != 'number') throw new Error ('Параметр может принимать только строку или число');
    for (let i = 0; i < arrLenght; i++) {
         summ = summ  + arr[i]
    }
    param( acc, summ);
}
mreduce(arr, function, item ) {
    console.log( item,i)
})