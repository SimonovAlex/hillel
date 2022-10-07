// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min).toString();
//   }

// const mainN = prompt('Введите длину главного массива');
// const subN = prompt('Введите длину внутренних массивов');


// function hand(item, i, arr) {

// }

//  const arr = new Array(+mainN).fill(0).map((_, ind) =>
//      new Array(+subN).fill(0).map((_, i) => prompt(Введите элемент ${i} в подмассиве ${ind})));

//  alert('Ваш массив:' + arr.map(subArr => '\n' + subArr));

//  // const mainN = prompt('Введите длину главного массива');
// // const subN = prompt('Введите длину внутренних массивов');

// const mainN = 3;
// const subN = 3;

// //  const arr = new Array(+mainN).fill(0).map(cb)
    

// //  console.log('Ваш массив:' + arr.map(subArr => '\n' + subArr));

//  const arr = [];

// for (let i = 0; i < mainN; i++){
//   const r = [];
//   for (let j = 0; j < subN; j++ ){
//   r.push(randomIntFromInterval(10,99));
//   }
//   arr.push(r);
//   // console.log(arr);
// }

// console.log(arr);

// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min).toString();
// }

// arr[0].map(cb)

// function cb (item, ) {

//  console.log(item)
// }

// cb('qwe')

// delete min 
//  Input: [1,2,3,4,5], output= [2,3,4,5]
//  Input: [5,3,2,1,4], output = [5,3,2,4]
//  Input: [2,2,1,2,1], output = [2,2,2,1]




function deleteMin (arr) {
    let min = Math.min(...arr);
    let index = arr.indexOf(min);
    arr.splice(index, 1);
  
      // const sortedArr = arr.sort();
      // sortedArr.shift();
  
      // return sortedArr.slice(1);
    return arr
  }
  
  const dd = [1,2,3,4,5]
  
  console.log(deleteMin(dd))
  console.log(deleteMin([5,3,2,1,4]))
  console.log(deleteMin([2,1,2,1,2,1]))

  //Перевернуть каждое второе слово в заданной строке, а затем вернуть строку.
// + Отбросьте все начальные или конечные пробелы,
//  убедившись, что между каждым словом есть ровно один пробел. 
// + Знаки препинания следует рассматривать так, как если бы они были частью слова в этой ката.

function deleteSecondWord(string){
    const dirtyWords = string.split(" ");
    const words = dirtyWords.filter(item => !!item)
  
    for (let i = 1; i < words.length; i += 2){
      words[i] = words[i].split("")
        .reverse()
        .join("")
    }
  
    console.log(words)
  
    return words
  }
  
  
  
  // console.log(deleteSecondWord('123'))
  console.log(deleteSecondWord(' Я люблю    учить      JavaScript. Он  такой     же как и EcmaScript '))
  // console.log(deleteSecondWord())