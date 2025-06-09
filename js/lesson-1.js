// // const number = Number(prompt("Enter number"));
// // const number = +prompt("Enter number");
// const number = prompt("Enter number") * 1;
// console.log(number);

// const { version } = require("react");

// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// number === 10 ? alert("Вірно") : alert("Невірно");
// alert(number === 10 ? "Вірно" : "Невірно");

// const answer = confirm("Are you adult");
// console.log(answer);




// !2 math/random

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min < 0, min >= 15) {
//     alert("1/25")
//     }
// if (min < 15, min >= 30) {
//     alert("2/25")
// }if (min < 30, min >= 45) {
//     alert("3/25")
// }if (min < 45, min >= 59) {
//     alert("4/25")
// }



// !3 switch
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let userInput = parseInt(prompt('Введіть число від 1 до 4'));
// switch (userInput) {
//     case 1:
//             alert('"зима"');
//         break;
//     case 2:
//             alert('"весна"');
//         break;
//     case 3:
//             alert('"літо"');
//         break;
//     case 4:
//             alert('"осінь"');
//         break;
   
//     default:
//         alert('"Вибачте, але ви маєте ввести значення від 1 до 4 включно"');
//         break;
// }

 

// !4 hours minutes
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
// let minutesInput =parseInt(prompt(''));
// if (!isNaN(minutesInput) && minutesInput >= 0) {
//     let hours = Math.floor(minutesInput / 60).toString().padStart(2, '0');
//     let minutes = (minutesInput % 60).toString().padStart(2, '0');
//     alert(`Це становить ${hours} год. ${minutes} хв.`);
// } else {
//     alert("Будь ласка, введіть коректне число!");
// }

// !5 login password
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// let login = prompt("enter your login")

// if (login === "admin"){
//     let password = prompt('password');
//     if (password === "admin") {
//         alert('Glory to Ukraine');
//     }
//        if (password === null || password === "") {
//         alert('Скасовано');
//     }
//        else {
//            alert('Wrong');
//     }
//     }


// !6 while
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let i = 1
// while (i <= 20) {
//     console.log(i);
//     i++;
// }


// !7 for
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--) {
//         sum += i;
//     }
//    return sum
// }
// console.log(0, 101);


//     if typeof (min !==)
//     
//      {
//         
//         if (i % 2 === 0) {
//             sum += i
//         }
//     }
//     return sum
// }
//     console.log(getNumbers(1, 10));
     
// !8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
//     if (Number.isNaN(a) || Number.isNaN(b)) {
//         return "not a number"; // Якщо хоча б один аргумент — NaN
//     }

//     return a < b ? `меньше: ${a}` : `меньше: ${b}`;
// }

// console.log(min(10, NaN));  
// console.log(min(10, 5));     
// console.log(min(NaN, 7));    
// console.log(min("text", 3)); 

// !9 promt+function
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (age >= 18) {
//         return true; // Якщо вік 18 або більше, повертаємо true
//     } else {
//         return confirm("Вам менше 18. Ви підтверджуєте доступ?"); // Запитуємо підтвердження через confirm
//     }
// }
// let age = Number(prompt("Який ваш вік?")); // Перетворюємо введене значення у число
// console.log(isAdult(age)); // Викликаємо функцію і виводимо результат

// console.log(isAdult(20)); // true
// console.log(isAdult(16)); // Запитає підтвердження у користувача

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) { // Перевіряємо кожне число від 1 до num
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz"); // Спочатку перевіряємо числа, кратні і 3, і 5
//         } else if (i % 3 === 0) {
//             console.log("fizz"); // Якщо тільки кратне 3
//         } else if (i % 5 === 0) {
//             console.log("buzz"); // Якщо тільки кратне 5
//         } else {
//             console.log(i); // Інакше просто виводимо число
//         }
//     }
// }

// fizzBuzz(15);

