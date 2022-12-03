export const cookedData = function  (item) {
    // console.log('item', item);
    return {text: item.title, checked: item.completed, id: item.id,editable: false}
  }

  