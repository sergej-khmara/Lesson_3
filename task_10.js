// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра,
//     а возвращает массив только в обратном порядке.Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только массив
//     - Генерировать ошибку если был передан пустой массив


//const arr = [3,2,1];
//reverse(arr); // [1,2,3]
function  mrevers (arr) {

    var result = [];
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив');
    let i, length = arr.length;
    if (arr.length === 0) throw new Error('Длина массива ноль');
    for (i = 0; i < length; i = i + 1) {
        // result.push(arr[i])
        result[i] = arr [(arr.length - 1) - i]
    }
    return result;
}

    function callback() {

    }

const arr = [3,2,1,0];

let rez = mrevers (arr) //вызов функции
console.log (rez);