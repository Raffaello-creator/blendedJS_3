// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#email = email;
    this.#login = login;
  }
  get login() {
    return this.#login;
  }
  set login(value) {
    this.#login = value;
  }
  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
  }
}

const user = new Client('lalala', 'tototo');
console.log(user.login);
console.log(user.email);
user.login = 'lilili';
console.log(user.login);
user.email = 'tatata';
console.log(user.email);
