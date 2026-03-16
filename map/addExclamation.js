// Напишите функцию addExclamation, которая добавляет "!" в конец
// каждой строки массива.
// Пример:
// ["hello","hi"] → ["hello!","hi!"]

function addExclamation (string) {
    return string.map(x => x + "!");
}

console.log(addExclamation(["hi", "good"]));

//output
//(2) ['hi!', 'good!']