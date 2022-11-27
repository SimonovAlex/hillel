class Controller {

  inputRef

  constructor (state) {
    this.state = state;
  }

  validate(){

    console.log('inputList validate', )
  }

  addToDoItem(e){
    console.log(e);
    // this.state.push({})
    console.log('addToDoItem', this);

    if (this.inputRef.value) {
      this.state.push({
        text: this.inputRef.value,
        checked: false,
        editable: false,
        id: new Date(),
      })
  
      // const data = await createTodo(inputRef.value);
  
      // if(!data){
      //   return 
      // }


      // state.push(cookedData(data))
      // renderLi();
  
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