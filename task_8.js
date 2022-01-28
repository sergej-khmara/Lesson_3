



function f(array) {
    if (!Array.isArray(array)) {
        console.log("Первый параметр обязателен и может принимать только массив");
        return;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += f(array[i]);
        }
        if (typeof (array[i]) == 'number') {
            sum += array[i];
        }
    }
    return sum;
}
let a = [[[1, 2], [1, 2]], [['2', 1], [1, 2]]];
console.log(f(a));