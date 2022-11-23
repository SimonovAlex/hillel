// сделать используя только js приложение Todo list

// функционал:

// добавлять новый айтем
// редактировать айтем
// удалять айтем
// ставить статус (чекбокс )
// удалить всё
// небольшую валидацию по усмотрению (низя спецсимволы вводить)
// дизайн прикреплён ниже

const userId = 1;

let state = [];

const inputRef = document.createElement('input');
inputRef.placeholder = "enter text";
inputRef.setAttribute('autofocus', 'autofocus');

const buttonAdd = document.createElement('button');
buttonAdd.innerText = 'Add';
buttonAdd.addEventListener('click', addToDoItem);

const buttonClearAll = document.createElement('button');
buttonClearAll.innerText = 'Clear all';
buttonClearAll.addEventListener('click', clearALL);

const toDoList = document.createElement('ul');

const divForToDoList = document.getElementById('toDoList');
divForToDoList.append(inputRef);
divForToDoList.append(buttonAdd);
divForToDoList.append(buttonClearAll);
divForToDoList.append(toDoList);

// let uPattern = /^[a-zA-Z0-9_-]{4,50}$/;

async function addToDoItem() {

  if (inputRef.value) {
    // state.push({
    // text: inputRef.value,
    // checked: false,
    // editable: false,
    // id: new Date(),
    // })

    const data = await createTodo(inputRef.value);

    if(!data){
      return 
    }
    state.push(cookedData(data))
    renderLi();

    inputRef.value = '';
  }
}

function renderLi() {

  toDoList.innerHTML = '';

  state.forEach((s) => {
    const item = createToDoItem(s);
    toDoList.append(item);
  })
}

function clearALL() {
  toDoList.innerHTML = '';
  state.length = 0;
  console.log(state);
}


function removeToDoItem(event) {

  // const index = state.findIndex(s => s.id.toString() == event.target.parentElement.dataset.id);
  const liObj = findObjbyEvent(event);

  const checkboxRef = event.target.parentElement.querySelector('input');
  const buttonsRef = [...event.target.parentElement.querySelectorAll('button')];

  checkboxRef.removeEventListener('click', checkedToDoItem);
  buttonsRef[0].removeEventListener('click', editToDoItem);
  buttonsRef[1].removeEventListener('click', removeToDoItem);

  const index = state.findIndex(s => s === liObj);
  deleteTodo(state[index].id)
  // console.log(index);
  state.splice(index, 1);
  // console.log(state);

  // event.target.parentElement.remove();

  renderLi();
}

function createToDoItem(liObj) {
    const item = document.createElement('li');
    item.dataset.id = liObj.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (liObj.checked == true) {
      checkbox.checked = 'checked';
    }
    item.append(checkbox);
    checkbox.addEventListener('click', checkedToDoItem);

    const span = document.createElement('span');
    span.innerText = liObj.text;
    if (liObj.checked == true) {
      span.classList.toggle('checked')
    }
    item.append(span);

    const buttonEdit = document.createElement('button');
    buttonEdit.innerText = 'Edit';
    item.append(buttonEdit);
    buttonEdit.addEventListener('click', editToDoItem);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerText = 'Remove';
    item.append(buttonRemove);
    buttonRemove.addEventListener('click', removeToDoItem);

    toDoList.append(item);

    // console.log('liObj.text', liObj.text)

    return item;
}

async function checkedToDoItem(event) {
  const liObj = findObjbyEvent(event);

  await updateData(liObj.id, {...liObj, checked: !liObj.checked});
}


function createEditableToDoItem(liObj) {
  const item = document.createElement('li');
  item.dataset.id = liObj.id;

  const input = document.createElement('input');
  input.value = liObj.text;
  item.append(input);

  const buttonSave = document.createElement('button');
  buttonSave.innerText = 'Save';
  item.append(buttonSave);
  buttonSave.addEventListener('click', saveToDoItem)

  const buttonCancel = document.createElement('button');
  buttonCancel.innerText = 'Cancel';
  item.append(buttonCancel);
  buttonCancel.addEventListener('click', cancel)

  return item;
}

function editToDoItem(event) {

  // const liObj = state.find(s => s.id.toString() == event.target.parentElement.dataset.id);
  const liObj = findObjbyEvent(event);
  liObj.editable = true;

  const newItem = createEditableToDoItem(liObj)
  event.target.parentElement.parentElement.replaceChild(newItem, event.target.parentElement);
}

async function saveToDoItem(event) {

  // console.dir(event.target.previousElementSibling.value)
  if (event.target.previousElementSibling.value != '') {
    const liObj = findObjbyEvent(event);

   await updateData(liObj.id, {...liObj, text: event.target.previousElementSibling.value});


  }

}

function cancel(event) {
  const liObj = findObjbyEvent(event);
  liObj.editable = false;
  renderLi();
}


function findObjbyEvent(event) {
  const liObj = state.find(s => s.id.toString() == event.target.parentElement.dataset.id);
  return liObj;
}


function cookedData (item) {
  // console.log('item', item);
  return {text: item.title, checked: item.completed, id: item.id,editable: false}
}

function getInitialData () {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  .then((response) => response.json())
  .then((json) => json.map(cookedData))
  .then((mappedData) => state = mappedData)
  .then(() => renderLi())
  .catch(e => alert(e.message));
};

getInitialData();



function updateData(id, data) {
  // const updatedItem = state.find((item) => item.id === id);

 
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        title: data.text,
        completed: data.checked,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(data => {
      // console.log(data)
      if(!data.ok){
        throw new Error(data.status);
      }
      return data
    })
    .then(async data => {
      const json = await data.json()
      const idx = state.findIndex(item => item.id === json.id);
      state[idx] = cookedData(json)
    }).then(data => {
      renderLi();
      return data
    })
    .catch((e) => console.log(e.message))
  
}

function deleteTodo(id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE'
  })
}


function createTodo(title) {
  return fetch('https://jsonplaceholder.typicode.com/todos/asdf/asdf/asdf', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    completed: false,
    userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(data => {
  if(!data.ok){
    throw new Error(data.status);
  }
  return data
})
.then((response) => response.json()).catch((e) => console.log(e.message))
}
