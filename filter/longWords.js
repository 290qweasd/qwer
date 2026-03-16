// Напишите функцию longWords, которая возвращает строки длиной
// больше 5 символов.
// Пример:
// ["cat","elephant","dog","giraffe"] → ["elephant","giraffe"]

function longWords (arr) {
    return arr.filter(x => x.length > 5);
}

const m = ["privet", "poka"];

console.log(longWords(m));

//output
//(1) ['privet']