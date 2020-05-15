// Среднее арифметическое
let avg = 0;
let num = 0;
let sum = 0;
let count = 0;

do {
  num = parseFloat(prompt('Число?', '0'));
  count ++;
  sum += num;
  avg = sum / count;
  console.log(sum, count, avg);
} while (num !== '' && num);

alert(sum, count, avg);