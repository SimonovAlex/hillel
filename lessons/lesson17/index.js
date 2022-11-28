// console.log(new Controller());



// console.log('Controller', render());

import TodoList from "./TodoList.js"

const todoList = new TodoList("todoListContainer");

todoList.render();

const rerender = () => {
  todoListContainer.innerHTML = ''
  todoList.render();
}
const btn = document.createElement("button");
btn.innerHTML = "render"
btn.addEventListener('click', rerender);
document.body.append(btn)





