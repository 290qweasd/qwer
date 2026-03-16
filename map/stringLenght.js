// Напишите функцию stringLengths, которая принимает массив строк и
// возвращает массив с длинами строк.
// Пример:
// ["apple","kiwi"] → [5,4]

function stringLengths (array) {
    return array.map(x => x.length);
}

console.log(stringLengths(["privet", "poka"]))

//output
//(2) [6, 4]