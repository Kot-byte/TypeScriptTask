// person.ts

// Определение интерфейса IPerson
interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

// Реализация класса Person, который реализует интерфейс IPerson
class Person implements IPerson {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Пример использования класса Person
const person1: IPerson = new Person("Maria", 21);
person1.greet();

const person2: IPerson = new Person("Bob", 25);
person2.greet();
