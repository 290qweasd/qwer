// Напишите функцию extractNames, которая принимает массив
// объектов студентов и возвращает массив их имён.
// Пример:
// [
// {name: "Anna", age: 19},
// {name: "Ivan", age: 20}
// ]
// Результат:
// ["Anna","Ivan"]

function extractNames (object) {
    return object.map(obj => obj.name);
}

const a = [
    {name: "Anna", age: "19"},
    {name: "Pavel", age: "24"},
    {name: "Misha", age: "17"},
];

console.log(extractNames(a))

//output
//(3) ['Anna', 'Pavel', 'Misha']