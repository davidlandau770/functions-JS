// שאלה 1
// class Phone {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     details() {
//         console.log(`Phone: ${this.brand} ${this.model}`);
//     }
// }
// const details = new Phone("Samsung", "S22");
// details.details();

// שאלה 2
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
// }
// const area = new Rectangle(5,4);
// console.log(area.area());

// שאלה 3
// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;

//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//         }
//     }
//     withdraw(amount) {
//         if (amount < this.balance && amount > 0) {
//             this.balance -= amount;
//         }
//     }
//     checkBalance() {
//         return this.balance;
//     }
// }
// const bankAccount = new BankAccount("david", 1000);
// console.log(bankAccount.checkBalance());
// bankAccount.deposit(500);
// console.log(bankAccount.checkBalance());
// bankAccount.withdraw(200);
// console.log(bankAccount.checkBalance());

// שאלה 4
// function Animal(name) {
//     this.name = name;
//     this.speak = function () {
//         return `oooo`
//     }
// }
// function Dog(name) {
//     this.name = name;
//     this.speak = function () {
//         return "hav hav"
//     };
//     this.bark = function () {
//         return `${name} barks`
//     }
// }
// const a = new Animal("puchi");
// const d = new Dog("Rocky");
// Object.setPrototypeOf(d, a);
// console.log(`${a.name} makes a sound ${a.speak()}`);
// console.log(`${d.name} makes a sound ${d.speak()}`);
// console.log(`${d.bark()}`);

// שאלה 5
// function Vehicle(type) {
//     this.type = type;
//     this.describe = function () {
//         return `This is a ${this.type}`;
//     }
// }
// function Car(brand) {
//     this.brand = brand;
//     this.info = function () {
//         return `This is a ${this.brand} ${this.type}`;
//     }
// }
// const v = new Vehicle("Car")
// const c = new Car("BMW")
// Object.setPrototypeOf(c, v)
// console.log(c.describe());
// console.log(c.info());

// שאלה 6
// function Area() {
//     return 0
// }
// function Circle(radius) {
//     this.radius = radius;
//     this.area = function () {
//         return Math.PI * radius * radius;
//     }
// }
// function Square(side) {
//     this.side = side;
//     this.area = function () {
//         return side * side;
//     }
// }
// const a = new Area();
// const c = new Circle(3);
// const s = new Square(4);
// Object.setPrototypeOf(c, a);
// Object.setPrototypeOf(s, a);
// console.log(c.area());
// console.log(s.area());

// שאלה 7
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     info() {
//         return `${this.title} by ${this.author}`
//     }
// }
// const b = new Book("The Hobbit", "Tolkien");
// console.log(b.info());

// שאלה 8
// class Person {
//     constructor(name) {
//         this.name = name;
//     } 
//     greet() {
//         return `Hello, I'm ${this.name}`
//     }
// }
// class Student extends Person {
//     constructor(name, school) {
//         super(name)
//         this.school = school;
//     }
//     study() {
//         return `${this.name} is studying at ${this.school}`
//     } 
// }
// const p = new Person();
// const s = new Student("Alice", "Oxford");
// console.log(s.greet());
// console.log(s.study());

// שאלה 9
// class Employee {
//     #salary = 4000;
//     getSalary() {
//         return this.#salary;
//     }
//     work() {
//         return `Employee is working`;
//     }
// }
// class Manager extends Employee {
//     work() {
//         return `Manager is managing`;
//     }
// }
// const e = new Employee();
// const m = new Manager();
// console.log(e.getSalary());
// console.log(e.work());
// console.log(m.getSalary());
// console.log(m.work());

