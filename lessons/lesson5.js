
const mainN = prompt('Введите длину главного массива');
const subN = prompt('Введите длину внутренних массивов');


function hand(item, i, arr, ...args) {

}

 const arr = new Array(+mainN).fill(0).map((_, ind) =>
     new Array(+subN).fill(0).map((_, i) => prompt(Введите элемент ${i} в подмассиве ${ind})));

 alert('Ваш массив:' + arr.map(subArr => '\n' + subArr));
