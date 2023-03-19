// console.log(new Controller());



// console.log('Controller', render());

import TodoList from "./TodoList.js"

const todoList = await TodoList.getInstance("todoListContainer");
console.log(todoList);
todoList.render();



