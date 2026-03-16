// Напишите функцию countTotalLength, которая возвращает общую
// длину всех строк в массиве.
// Пример:
// ["hi","hello"] → 7

function countTotalLength (arr) {
    return arr.reduce((sum, x) => sum + x.length, 0 );
}

console.log(countTotalLength(["hi","hello"]));

//output
//7