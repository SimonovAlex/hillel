import State from "./State.js";

class ListItem {
  constructor(obj){

    this.text = obj.text;
    this.checked = obj.checked;
    this.id = obj.id;

    this.editable = false;
    this.liRef = document.createElement('li');
    this.state = State.getInstance();

    this.checkedToDoItem = this.checkedToDoItem.bind(this);
    this.editToDoItem = this.editToDoItem.bind(this);
    this.removeToDoItem = this.removeToDoItem.bind(this);
    this.saveToDoItem = this.saveToDoItem.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  checkedToDoItem() {
    const item = this.state.findById(this.id);
    this.state.update(this.id, {...item, checked: !item.checked});
  }

  editToDoItem() {
    const item = this.state.findById(this.id);
    this.editable = true;
  
    this.render();
  }

  removeToDoItem(){
    this.state.delete(this.id);
  }

  saveToDoItem(){
    const item = this.state.findById(this.id);
    this.state.update(this.id, {...item, text: this.text});
    this.editable = false;

  }

  cancel(){
    const item = this.state.findById(this.id);
    this.editable = false;
  }

  handleChangeText(e){
    this.text = e.target.value;
  }

  renderReadable() {

    const span = document.createElement('span');
    span.innerText = this.text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (this.checked) {
      checkbox.checked = 'checked';
    }
    checkbox.addEventListener('click', this.checkedToDoItem);

    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Edit';
    buttonEdit.addEventListener('click', this.editToDoItem);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerText = 'Remove';
    buttonRemove.addEventListener('click', this.removeToDoItem);


    return [checkbox, span, buttonEdit, buttonRemove]
  }

  renderEditable() {
    const input = document.createElement('input');
    input.value = this.text;
    input.addEventListener('input', this.handleChangeText)

    const buttonSave = document.createElement('button');
    buttonSave.innerText = 'Save';

    buttonSave.addEventListener('click', this.saveToDoItem)

    const buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancel';
    buttonCancel.addEventListener('click', this.cancel)

    return [input, buttonSave, buttonCancel]
  }

  render() {
    
    this.liRef.innerHTML = '';
    


    if(this.editable){
       this.liRef.append(...this.renderEditable());
    }else {
      this.liRef.append(...this.renderReadable());
    }

    return this.liRef;
  }
}

export default ListItem;