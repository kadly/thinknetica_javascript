// Валидировать и переформатировать введенную пользователем дату из Американского в Российский стандарт 

let date = new Date(prompt('Дата в Американском стандарте?', ''));

console.log(date instanceof Date && !isNaN(date.valueOf()));

let seconds = date.getTime() / 1000;

let formatter = new Intl.DateTimeFormat("ru");
alert('Дата в Российском стандарте: ' + formatter.format(date));