import { makeAutoObservable } from "mobx";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: string) {
    this.todos.push({
      id: Date.now(),
      title: todo,
      completed: false,
    });
  }

  get count() {
    return this.todos.length;
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get completedCount() {
    return this.completedTodos.length;
  }

  get incompletedCount() {
    return this.count - this.completedCount;
  }

  toggleComplete(id: number) {
    this.todos = this.todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      };
    });
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export default TodoStore;
