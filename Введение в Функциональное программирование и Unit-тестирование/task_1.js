// Написать чистую функцию, которая принимает массив чисел и возвращает сумму и количество положительных элементов массива

let arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];
let count, sum = 0;

const sumOfPositive = arr => {
  if (!Array.isArray(arr))
    throw new Error('An array is expected at the entrance');

  const result = arr.filter(number => number > 0)

  let sum = result.reduce((acc, item) => acc + item, 0);

  return {
    count: result.length,
    sum
  };
}

sumOfPositive(arr);