// Реализуйте абстракцию (набор функций) для работы с прямоугольниками,
// стороны которого всегда параллельны осям. Прямоугольник может
// располагаться в любом месте координатной плоскости.
// При такой постановке, достаточно знать только три параметра для
// однозначного задания прямоугольника на плоскости: координаты левой
// верхней точки, ширину и высоту. Зная их, мы всегда можем построить
// прямоугольник одним единственным способом.
// y | 4 | точка ширина | *------------- 3 | | | | | | высота 2 | | | |
// -------------- 1 | | ------|--------------------------- x 0 | 1 2 3 4 5 6 7 |
// | |
// Основной интерфейс:
// ● makeRectangle(point, width, height) (конструктор) – создает
// прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и
// высоту. Ширина и высота – положительные числа
// ● Селекторы getStartPoint(rectangle), getWidth(rectangle) и
// getHeight(rectangle)
// ● containsOrigin(rectangle) – проверяет, принадлежит ли центр координат
// прямоугольнику (не лежит на границе прямоугольника, а находится
// внутри). Чтобы в этом убедиться, достаточно проверить, что все
// вершины прямоугольника лежат в разных квадрантах (их можно
// высчитать в момент проверки).
// Экспортируйте функции makeRectangle(point, width, height),
// containsOrigin(rectangle), getStartPoint(rectangle), getWidth(rectangle) и
// getHeight(rectangle).
// Примеры:
// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота

// p 4
// -----------
// | |
// | | 5
// | |
// -----------
// p = makeDecartPoint(0, 1)
// rectangle = makeRectangle(p, 4, 5)
// containsOrigin(rectangle) // false
// getWidth(rectangle) // 4
// rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4)
// containsOrigin(rectangle2) // true

const makeRectangle = (point, width, height) => {
  if (width <= 0 || height <= 0) {
    throw new Error('nada pisitive numbers');
  }

  return {
    point,
    width,
    height,
  };
};

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const getPointX = (point) => {
  if (typeof getX !== 'undefined' && typeof getX === 'function') {
    return getX(point);
  }

  if (point && typeof point.getX === 'function') {
    return point.getX();
  }

  if (Array.isArray(point)) {
    return point[0];
  }

  return point.x;
};

const getPointY = (point) => {
  if (typeof getY !== 'undefined' && typeof getY === 'function') {
    return getY(point);
  }

  if (point && typeof point.getY === 'function') {
    return point.getY();
  }

  if (Array.isArray(point)) {
    return point[1];
  }

  return point.y;
};

const containsOrigin = (rectangle) => {
  const startPoint = getStartPoint(rectangle);
  const left = getPointX(startPoint);
  const top = getPointY(startPoint);
  const right = left + getWidth(rectangle);
  const bottom = top - getHeight(rectangle);

  return left < 0 && right > 0 && bottom < 0 && top > 0;
};

module.exports = {
  makeRectangle,
  containsOrigin,
  getStartPoint,
  getWidth,
  getHeight,
};
