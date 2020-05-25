// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// A метка времени (timestamp в секундах)
// B кластер
// C тип
// D идентификатор пользователя
// Все входные данные - целые десятичные числа

//const id = '15883120165885553663'

const timestamp = 1588312016;
<<<<<<< HEAD
const a = timestamp.toString(16).padStart(8, '0');

const claster = 3;
const b = claster.toString(16).padStart(2, '0');

const type = 8;
const c = type.toString(16).padStart(1, '0');

const user = 5553663;
const d = user.toString(16).padStart(6, '0');
=======
const a = timestamp.toString(16);

const claster = 58;
const b = claster.toString(16);

const type = 8;
const c = type.toString(16);

const user = 5553663;
const d = user.toString(16);
>>>>>>> 00805476e4be81cd277b9fa26975c9d3ab0946eb

console.log(a + b + c + d);