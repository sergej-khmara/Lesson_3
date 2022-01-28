// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
//     Первым параметром функция принимает значение, которым заполнять массив,
//     а вторым — сколько элементов должно быть в массиве.
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число


//arrayFill('x',5); // [x,x,x,x,x]

function arrayFill(value, count_value) {

    if (!Array.isArray(value) && typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object') {
        console.log('Первый параметр обязателен и может принимать только число, строку, объект, массив');
        return;
    }
    if (typeof count_value !== 'number') {
        console.log('Второй параметр обязателен и может принимать только число');
        return;
    }

    let out = [];
    for (i = 0; i < count_value; i++) {
        out[i] = value;
    }
    return out;
}

console.log(arrayFill(true , 5));