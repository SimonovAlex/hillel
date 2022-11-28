export default class State {

  static instance;

  static getInstance() {
    if(!State.instance){
      State.instance = new State();
    }
    return State.instance;
  }

  #state
  #renderFn

  constructor (){
    this.#state = [{
      text: '1 todo',
      checked: false,
      editable: false,
      id: 'id # 1',
    },{
      text: '2 todo',
      checked: false,
      editable: true,
      id: 'id # 2',
    },{
      text: 'todo 3',
      checked: true,
      editable: false,
      id: 'id # 3',
    },{
      text: 'todo 4',
      checked: true,
      editable: true,
      id: 'id # 4',
    }];
  }

  add(item){
    this.#state.push(item);
    this.rerender();
  }

  delete(id){
    const idx = this.findIndById(id);

    this.#state.splice(idx, 1);
    
    this.rerender();
  }

  update(id, item){
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