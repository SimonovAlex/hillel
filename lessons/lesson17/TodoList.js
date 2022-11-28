import List from "./List.js";
import Controller from "./Controller.js";
import State from "./State.js";

const mockData = [{
  text: '1 todo',
  checked: false,
  editable: false,
  id: new Date(),
},{
  text: '2 todo',
  checked: false,
  editable: true,
  id: new Date()+1,
},{
  text: 'todo 3',
  checked: true,
  editable: false,
  id: new Date()+2,
},{
  text: 'todo 4',
  checked: true,
  editable: true,
  id: new Date()+5,
}]

class TodoList {

  static instance = {};
  static getInstance(id) {
    if(!TodoList.instance[id]){

      const instance = new TodoList(id);
      const state = State.getInstance();

      instance.setState(state);
      state.setRenderFn(instance.render.bind(instance));
      
      TodoList.instance[id] = instance;
    }
    return TodoList.instance[id];
  }
  constructor(id){
    this.id = id;
  }

  setState(state) {
    this.state  = state;
  }

  render() {
    const wrapper = document.querySelector(`#${this.id}`);
    wrapper.innerHTML = ''

    const list = new List();

    const controller = new Controller();
    wrapper.append(...controller.render(), ...list.render());
  }
}

export default TodoList;