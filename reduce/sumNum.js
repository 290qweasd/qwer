// Напишите функцию sumNumbers, которая возвращает сумму всех
// чисел массива.
// Пример:
// [1,2,3,4] → 10

function sumNum (arr) {
    return arr.reduce((sum, x) => sum + x, 0);
}

console.log(sumNum([1,2,2,3,4]))

//output
//12