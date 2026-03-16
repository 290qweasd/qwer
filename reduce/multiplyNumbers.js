// Напишите функцию multiplyNumbers, которая возвращает
// произведение всех чисел массива.
// Пример:
// [1,2,3,4] → 24

function multiplyNumbers (arr) {
    return arr.reduce((sum, x) => sum * x, 1);
}

console.log(multiplyNumbers([1,2,2,3,4]))

//output
//48