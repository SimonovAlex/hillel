import ListItem from "./ListItem.js"
import State from "./State.js";

class List {
  constructor() {
    this.state = State.getInstance();
  }


  render(){
    const toDoList = document.createElement('ul');

    const items = this.state.getState().map(s => new ListItem(s, this.state));
    const rendered = items.map(i => i.render());

    console.log('items', items);

    return [toDoList, ...rendered]
  }
}

export default List;