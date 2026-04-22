// Реализуйте абстракцию для работы с рациональными числами, включающую в
// себя следующие функции:
// ● Конструктор makeRational() - принимает на вход числитель и
// знаменатель, возвращает дробь в виде объекта.
// ● Селектор getNumer() - возвращает числитель
// ● Селектор getDenom() - возвращает знаменатель
// ● Сложение add() - складывает переданные дроби
// ● Вычитание sub() - находит разность между двумя дробями
// Не забудьте реализовать нормализацию дробей удобным для вас способом.
// const rat1 = makeRational(3, 9)
// getNumer(rat1) // 1
// getDenom(rat1) // 3
// const rat2 = makeRational(10, 3)
// const rat3 = add(rat1, rat2)
// ratToString(rat3) // '11/3'
// const rat4 = sub(rat1, rat2)
// ratToString(rat4) // '-3/1'

const gcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x === 0 ? 1 : x;
};

const normalize = (numer, denom) => {
  if (denom === 0) {
    throw new Error('no no no');
  }

  const divisor = gcd(numer, denom);
  let normalizedNumer = numer / divisor;
  let normalizedDenom = denom / divisor;

  if (normalizedDenom < 0) {
    normalizedNumer = -normalizedNumer;
    normalizedDenom = -normalizedDenom;
  }

  return {
    numer: normalizedNumer,
    denom: normalizedDenom,
  };
};

const makeRational = (numer, denom) => normalize(numer, denom);

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => {
  const numer = getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1);
  const denom = getDenom(rat1) * getDenom(rat2);

  return makeRational(numer, denom);
};

const sub = (rat1, rat2) => {
  const numer = getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1);
  const denom = getDenom(rat1) * getDenom(rat2);

  return makeRational(numer, denom);
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

module.exports = {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
