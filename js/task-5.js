// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

const numbers = [2, 1, 6, 8, 9, 10, 12];

const num = numbers.find(item => item % 2 !== 0);
console.log(num);
