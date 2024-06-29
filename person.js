// Реализация класса Person, который реализует интерфейс IPerson
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// Пример использования класса Person
var person1 = new Person("Maria", 21);
person1.greet();
var person2 = new Person("Bob", 25);
person2.greet();
