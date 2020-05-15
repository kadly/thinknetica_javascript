// Напишите программу, позволяющую удалить все лишние пробелы в тексте оставив по одному
let userData = prompt("Enter any text here:");
clearedUserData = userData.replace(/\s+/g, " ");
console.log (clearedUserData);

/* можно было бы и так:
разбить текст на слова, а потом соединить ч/з пробел */