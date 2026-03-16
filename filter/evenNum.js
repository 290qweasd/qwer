// Напишите функцию evenNumbers, которая возвращает только чётные
// числа.
// Пример:
// [1,2,3,4,5,6] → [2,4,6]

function evenNum (arr) {
    return arr.filter(x => x % 2 === 0);
}

const c = [1,2,3,4,5,6]

console.log(evenNum(c))

//output
//(3) [2, 4, 6]