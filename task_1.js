// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
//  Первый параметр обязателен и может принимать только массив
// Второй параметр обязателен и может принимать только функцию


function forEach(arr, callback) {
    //Ваша реализация метода
    if  (typeof arr === 'object') {
        let i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
            if ( typeof callback === 'function'){
                callback(arr[i], i, arr);
            }else {throw new Error('Первый параметр обязателен и может принимать только массив')}
        }
    }else {
        throw new Error('Второй параметр обязателен и может принимать только функцию')
    }
}

const arr = [1,2,3];

forEach(arr, function (item, i, arr) { //вызов функции
    console.log(item, i, arr);
})

