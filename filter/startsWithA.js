// Напишите функцию startsWithA, которая возвращает строки,
// начинающиеся с буквы "A".
// Пример:
// ["Anna","Ivan","Alex","Maria"] → ["Anna","Alex"]

// function startsWithA(array) {
//     return array.filter(x => x[0] === "A");
// }

function startsWithA (arr) {
    return arr.filter(x => x.startsWith("A" || "a"))
}

const e = ["Anna","Ivan","Alex","Maria"];

console.log(startsWithA(e));

//output
//(2) ['Anna', 'Alex']