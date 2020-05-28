/*Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой
word: само слово
code: сумма кодов всех символов слова
Словом можно считать символы между пробелами
Для подсчета суммы кодов всех символов слова написать отдельную чистую функцию, на нее так же написать тесты
Сигнатура
wordStat(text: string): {word: string: code: number}[] */

let text = 'Lorem ipsum dolor sit amet.';
let words = text.split(' ');

const sumOfCharCodes = function (word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += word[i].charCodeAt();
  }
  return sum;
};

const wordStat = function () {
  let arr1 = words;
  let arr2 = arr1.map(function (item) {
    return {
      word: item,
      sum: sumOfCharCodes(item)
    }
  })

  return arr2;
};

console.log(wordStat(text));