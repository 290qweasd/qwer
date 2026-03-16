// Напишите функцию adults, которая возвращает только студентов 18
// лет и старше.
// Пример:
// [
// {name:"Anna", age:17},
// {name:"Ivan", age:21},
// {name:"Olga", age:19}
// ]
// Результат:
// [{name:"Ivan", age:21}, {name:"Olga", age:19}]

function adult (object) {
    return object.filter(obj => obj.age > 17);
}

const d =
[
{name:"Anna", age:17},
{name:"Ivan", age:21},
{name:"Olga", age:19}
]

console.table(adult(d));

//output
// ┌─────────┬────────┬─────┐
// │ (index) │ name   │ age │
// ├─────────┼────────┼─────┤
// │ 0       │ 'Ivan' │ 21  │
// │ 1       │ 'Olga' │ 19  │
// └─────────┴────────┴─────┘