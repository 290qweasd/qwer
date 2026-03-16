// Напишите функцию maxNumber, которая находит самое большое число
// в массиве.
// Пример:
// [3,7,2,9,5] → 9

function maxNumber (arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

console.log(maxNumber([3,7,2,9,5]))

//output
//9