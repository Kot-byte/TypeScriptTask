var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TodoList.prototype.getTasks = function () {
        return this.tasks;
    };
    return TodoList;
}());
var todoList = new TodoList();
todoList.addTask({ id: 1, text: 'Coding' });
todoList.addTask({ id: 2, text: 'Drink' });
var allTasks = todoList.getTasks();
console.log(allTasks);
