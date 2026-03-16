// ; Напишите функцию doubleNumbers, которая принимает массив чисел
// ; и возвращает новый массив, где каждое число умножено на 2.
// ; Пример:
// ; [1,2,3] → [2,4,6]

function doubleNumbers(array) {
    if (!Array.isArray(array)) return ("net"); 
    return array.map(x => x * 2);
}
console.log(doubleNumbers([1,2,3,4,5]));

// output:
// (5) [2, 4, 6, 8, 10]