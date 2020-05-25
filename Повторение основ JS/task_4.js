// Среднее арифметическое
<<<<<<< HEAD
let avg = num = sum =  0;
let count = -1;

do {
=======
let avg = 0;
let num = 0;
let sum = 0;
let count = 0;

do {
  num = parseFloat(prompt('Число?', '0'));
>>>>>>> 00805476e4be81cd277b9fa26975c9d3ab0946eb
  count ++;
  sum += num;
  avg = sum / count;
  console.log(sum, count, avg);
<<<<<<< HEAD
  num = parseFloat(+prompt('Число?', ''));
  //console.log(num, typeof num);
} while (!isNaN(num));

alert(sum + ', ' + count + ', ' + avg);
=======
} while (num !== '' && num);

alert(sum, count, avg);
>>>>>>> 00805476e4be81cd277b9fa26975c9d3ab0946eb
