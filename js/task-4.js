// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

const numbers = [2, 4, 6, 8, 10];

const num = numbers.every(item => item % 2 === 0);

console.log(num);
