



// let xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');


// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function() {
//   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else { // если всё прошло гладко, выводим результат
//     console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//   }
// };

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     console.log(`Получено ${event.loaded} из ${event.total} байт`);
//   } else {
//     console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//   }

// };

// xhr.onloadend = function (e) {
//   console.log('done', JSON.parse(xhr.response))
// }

// xhr.onerror = function() {
//   alert("Запрос не удался");
// };


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(e => console.log( 'catch', e))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(e => console.log( 'catch', e))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })},)
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(e => console.log( 'catch', e))
  
//   sessionStorage.setItem('tested', 'session')


// console.log(sessionStorage.getItem('asdf'));

// fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(e => console.log( 'catch', e))
