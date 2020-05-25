// Среднее арифметическое
let avg = num = sum =  0;
let count = -1;

do {
  count ++;
  sum += num;
  avg = sum / count;
  console.log(sum, count, avg);
  num = parseFloat(+prompt('Число?', ''));
  //console.log(num, typeof num);
} while (!isNaN(num));

alert(sum + ', ' + count + ', ' + avg);