class List {
  constructor(state) {
    this.state = state;
  }


  render(){
    const toDoList = document.createElement('ul');

    const items = this.state.map(s => new ListItem(s));
    const rendered = items.map(i => i.render());

    console.log('items', items);

    return [toDoList, ...rendered]
  }
}