// Класс Circle, реализующий интерфейс Shape
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
// Класс Rectangle, реализующий интерфейс Shape
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
// Пример использования классов
var circle = new Circle(5);
console.log("Circle Area: ".concat(circle.calculateArea()));
console.log("Circle Perimeter: ".concat(circle.calculatePerimeter()));
var rectangle = new Rectangle(4, 6);
console.log("Rectangle Area: ".concat(rectangle.calculateArea()));
console.log("Rectangle Perimeter: ".concat(rectangle.calculatePerimeter()));
