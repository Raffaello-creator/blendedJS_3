// Створи клас для калькулятора, який має такі методи:
// - метод number, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

class Calculator {
  constructor(parameters) {
    this.result = 0;
  }
  add(value) {
    this.result += value;
    return this;
  }
  number(value) {
    this.result = value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }
  divide(value) {
    this.result /= value;
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }
  getResult() {
    console.log(this.result);
  }
}

const calc = new Calculator();

const result = calc
  .number(10) // 10
  .add(5) // 5
  .subtract(5) // 10
  .multiply(3) // 30
  .divide(2) //15
  .getResult();
