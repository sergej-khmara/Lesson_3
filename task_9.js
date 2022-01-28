// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
//     Первым параметром функция принимает значение, которым заполнять массив,
//     а вторым — сколько элементов должно быть в массиве.
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

//arrayFill('x',5); // [x,x,x,x,x]

function arrayFill(value, count_value) {
    if (!Array.isArray(value) && typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object')
        throw new Error('Первый параметр обязателен и может принимать только число, строку, объект, массив\'');
    if (typeof count_value !== 'number') throw new Error('Второй параметр обязателен и может принимать только число');
    let gen_out = [];
    for (i = 0; i < count_value; i++) {
        gen_out[i] = value;
    }
    return gen_out;
}

console.log(arrayFill( 'e' , 5));