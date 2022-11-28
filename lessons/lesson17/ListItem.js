class ListItem {
  constructor(obj){
    console.log('obj', obj);

    this.text = obj.text;
    this.checked = obj.checked;
    this.editable = obj.editable;


    this.checkedToDoItem = this.checkedToDoItem.bind(this);
    this.editToDoItem = this.editToDoItem.bind(this);
    this.removeToDoItem = this.removeToDoItem.bind(this);
  }

  checkedToDoItem(e) {
    console.log(e)
  }

  editToDoItem(e) {
    console.log(e)
  }

  removeToDoItem(e){
    console.log(e)
  }

  renderReadable() {

    const item = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = this.text;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (this.checked) {
      checkbox.checked = 'checked';
    }
    item.append(checkbox);
    checkbox.addEventListener('click', this.checkedToDoItem);

    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Edit';
    buttonEdit.addEventListener('click', this.editToDoItem);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerText = 'Remove';
    buttonRemove.addEventListener('click', this.removeToDoItem);


    item.append(checkbox, span, buttonEdit, buttonRemove);

    return item
  }

  renderEditable() {
    const item = document.createElement('li');

    return item
  }

  render() {
    if(this.editable){
      return this.renderReadable();
    }else {
      return this.renderEditable();
    }
  }
}

export default ListItem;