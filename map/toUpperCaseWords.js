// Напишите функцию toUpperCaseWords, которая принимает массив
// строк и возвращает массив строк в верхнем регистре.
// Пример:
// ["cat","dog"] → ["CAT","DOG"]

function toUpperCaseWords (string) {
    return string.map(x => x.toUpperCase(string));
}

console.log(toUpperCaseWords(["privet", 'PokA']))

//output:
//(2) ['PRIVET', 'POKA']