// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]]

const numbers = [1, 2, 3, 4, 5];

const a = numbers.map(num => num ** 2);
console.log(a);
