class TodoList {
    private tasks: { id: number; text: string }[] = [];

    addTask(task: { id: number; text: string }): void {
        this.tasks.push(task);
    }

    getTasks(): { id: number; text: string }[] {
        return this.tasks;
    }
}

const todoList = new TodoList();
todoList.addTask({ id: 1, text: 'Coding' });
todoList.addTask({ id: 2, text: 'Drink' });

const allTasks = todoList.getTasks();
console.log(allTasks);
