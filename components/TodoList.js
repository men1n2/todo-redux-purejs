import Element from './Element.js';
import Todo from './Todo.js';

class TodoList extends Element {
  constructor({todos, toggleTodo}) {
    super();
    this._$ = document.createElement('ul');
    todos.forEach((todo, index) => {
      const $todo = new Todo({..todo, onClick: () => {toggleTodo(todo.id)}});
      this._$.appendChild($todo.dom());
    });
  }
}

export default TodoList;
