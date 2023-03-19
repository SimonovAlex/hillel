import { USER_ID } from "./constants.js";
import Service from "./Service.js";

export default class State {

  static instance;

  static getInstance(renderFn) {
    if(!State.instance){
      State.instance = new State();
      State.instance.setRenderFn(renderFn);
    }
    return State.instance;
  }

  #state = [];
  #renderFn

  constructor (){

    this.getInitialTodos();
  }

  async getInitialTodos(){
    const todos = await Service.getInitialTodos();
    this.#state = todos;
    this.rerender();
  }


  async create(title) {
    const todo = await Service.createTodo({
      title,
      completed: false,
      userId: USER_ID,
    });
  
    this.#state.push({
      text: todo.title,
      checked: todo.completed,
      id: todo.id,
    });
    this.rerender();
  }

  add(item){
    this.#state.push(item);
    this.rerender();
  }

  async delete(id){

    await Service.deleteTodo(id);

    const idx = this.findIndById(id);

    this.#state.splice(idx, 1);
    
    this.rerender();
  }

  async update(id, item){


    const {data} = await Service.updateTodo(id, {
      title: item.text,
      completed: item.checked,
      userId: USER_ID,
    });

    console.log(data);

    const idx = this.findIndById(id);
    this.#state[idx] = item;
    this.rerender();
  }

  findById(id){
    return this.#state.find(i => i.id === id)
  }

  findIndById(id){
    return this.#state.findIndex(i => i.id === id)
  }

  getState(){
    return this.#state
  }

  setRenderFn(renderFn) {
    this.#renderFn = renderFn;
  }

  rerender(){
    this.#renderFn();
  }

}