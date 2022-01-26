// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
//     Функция должна содержать проверки:
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
//filter(arr, function(item, i, arr) {});

const nfilt = (collection, callback) => {
    const result = [];
    for (const item of collection) {
        // Предикат используется только для проверки
        // Внутрь callback по очереди передается каждый элемент коллекции collection
        if (callback(item)) {
            // В результат всегда добавляется элемент исходной коллекции
            result.push(item);
        }
    }

    return result;
    console.log(result)
}

if (typeof b !== "function") throw new Error("...")

    [1, 3, 5, 2, 4].filter((v, i, arr) {
    console.log(v);
    console.log(i);
    console.log(arr);
    return v > 2;
})