// Напишите функцию countStudents, которая возвращает общее
// количество студентов в массиве объектов.
// Пример:
// [
// {name:"Anna"},
// {name:"Ivan"},
// {name:"Olga"}
// ]
// Результат:
// 3

function countStudents(array) {
    return array.reduce(count => count + 1, 0);
}

const f =
[
{name:"Anna"},
{name:"Ivan"},
{name:"Olga"}
];

console.log(countStudents(f));

//output
//3