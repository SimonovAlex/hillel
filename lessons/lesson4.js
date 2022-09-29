// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min).toString();
//   // return '34';
// }
   
// function random(min, max, exclude = []){
//   // let arr = [];
//   // if(exclude){
//   //   arr = exclude;
//   // }

//   console.log(min, max, exclude, arguments)

//   let string = randomIntFromInterval(min, max);
//   for(let number of string){
//     if(exclude.includes(+number)){
//         return random(min, max, exclude);
//     } 
//     return +string
//   }
// };

// random(1, 100, [3]) // value from 1 to 100 but not include 3, 33, 43, 93
// random(1, 100, [3,6]) // value from 1 to 100 but not include 3, 6,66,33, 43,46
// random(1, 100) // value from 1 to 100

// console.log(random(1, 100, [3]))
// console.log(random(1, 100, [3, 6]))
// console.log(random(1, 100))

// function fn(previousValue, currentValue) {
//   return previousValue + currentValue;
// }

// function sum (numbs, ...args){
//   return [...numbs, ...args].reduce(fn, 0)
// }

// console.log(sum([1,2,3],2));
// console.log(sum([12,3],4,5));
// console.log(sum([1]));


// function sayHi(name) {
//   console.log("Hi", name)
// }

// function sayHello(name){
//   console.log("Hello", name)
// }

// function greeting (gr, name) {
//   let dd = name + '44';
//   gr(dd);
// }

// greeting(sayHi, "Vasya");
// greeting(sayHello, "Roma");

// function add (a,b){
//   return a + b 
// } 

// function sum(a) {
//   // console.log(arguments)
//   return add
// }

// const addSum = sum(1)

// const ddd = function() {
//   console.log('ddd')
// }
// ddd();
// console.log(addSum, add) 
// console.log(addSum === add)

const arr = [1,2,3,4,5]; // 1, 2, 3


console.log(arr.slice(1,4).join('||-||'))
console.log(arr === arr.slice(1,4), arr === arr.slice(0), arr.slice(0));

