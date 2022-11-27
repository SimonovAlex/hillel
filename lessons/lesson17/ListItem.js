class ListItem {
  constructor(obj){
    this.text = obj.text;
  }

  render() {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = this.text;
    item.append(span)


    return item
  }
}

export default ListItem;