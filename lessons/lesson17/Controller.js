import State from "./State.js";

class Controller {

  inputRef

  constructor () {
    this.state = State.getInstance();
  }

  validate(){

    // console.log('inputList validate', )
  }

  addToDoItem(e){
  

    if (this.inputRef.value) {
      // this.state.add({
      //   text: this.inputRef.value,
      //   checked: false,
      //   editable: false,
      //   id: new Date(),
      // })
  
      this.state.create(this.inputRef.value);

      this.inputRef.value = '';
    }
  }

  render() {
    this.inputRef = document.createElement('input');
    this.inputRef.addEventListener('input', this.validate);


    const addList = document.createElement('button');
    addList.innerText = 'Add';
    addList.addEventListener('click', this.addToDoItem.bind(this));


    return [this.inputRef, addList]
  }
}

export default Controller;