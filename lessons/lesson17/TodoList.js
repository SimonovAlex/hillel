import List from "./List.js";
import Controller from "./Controller.js";

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

  constructor(id){
    this.id = id;
    this.state = mockData;
  }

  render() {
    const wrapper = document.querySelector(`#${this.id}`);
    console.log(this.state);

    const list = new List(this.state);

    const controller = new Controller(this.state);
    console.log('controller.render()', controller.render());
    wrapper.append(...controller.render(), ...list.render());
  }
}

export default TodoList;