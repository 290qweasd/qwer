const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

function parseNumber(value, label) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error(`неизвестно ${label}: "${value}" не число.`);
  }
  return num;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('делить на ноль нельзя');
      }
      return a / b;
    case '%':
      // "a % of b" -> (a / 100) * b
      return (a / 100) * b;
    case '^':
      return a ** b;
    default:
      throw new Error('неизвесный оператор');
  }
}

async function main() {
  console.log('CLI Calculator');
  console.log('операторы: +, -, *, /, %, ^');
  console.log('% значит найти "сколько процентов от первого числа, будет состовлять второе" (a% of b).\n');

  try {
    const firstInput = await ask(' введите первое число: ');
    const operation = await ask('введите оператора (+, -, *, /, %, ^): ');
    const secondInput = await ask('введите второе число: ');

    const a = parseNumber(firstInput, 'первое число');
    const b = parseNumber(secondInput, 'второе число');

    const result = calculate(a, b, operation);
    console.log(`\nResult: ${result}`);
  } catch (error) {
    console.error(`\nError: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
