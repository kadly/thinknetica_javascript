/*Написать функцию, которая принимает массив чисел и возвращает сумму и количество отрицательных элементов массива*/
const numbers = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58]

const result = numbers.filter(number => number < 0);
console.log('count: ', result.length);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('sum: ', result.reduce(reducer));