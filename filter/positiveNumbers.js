// Напишите функцию positiveNumbers, которая возвращает только
// положительные числа из массива.
// Пример:
// [-2,5,-1,3] → [5,3]

function positiveNumbers (int) {
    return int.filter(x => x > 0)
}
const b = [-2, 3, 4, -1]

console.log(positiveNumbers(b))

//output
//(2) [3, 4]