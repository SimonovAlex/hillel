class TodoList {

  constructor(id){
    this.id = id;
    this.state = [];
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