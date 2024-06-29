// Определение интерфейса Shape
interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Класс Circle, реализующий интерфейс Shape
class Circle implements Shape {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Класс Rectangle, реализующий интерфейс Shape
class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Пример использования классов
const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Circle Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);
