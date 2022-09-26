 

//  function test(a,b) {
//     if(!!b){
//       return a 
//     }

//     return a+b
//  }


//  test(1,2)

// const input = prompt();

// const a = 1;
// const b = 2;

// if(input === 'sum') {

// }
//  if (input === 'minus'){

// }

// if(input === 'sum') {

// } else if (input === 'minus'){

// } else{ 
//   console.log('else error')
// }
// //....
//  switch(input){
//   case 'sum': 
//     console.log('sum', input, a +b );
//     break;
//   case "minus": 


//  }


// const result = if(a > b ){
//   return a*b 
// }else{
//   return a+b 
// }

// const a = 3;
// const b = 4;

// const result = a > b ? a*b : a+b;
// console.log(result);

// const a = 4;
// const b = 7;
// const c = 5;


// console.log(a && b && c);

// let i = 0;

// while (i < 10) {
  // console.log(i);
  // i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 10)

// const numbs = [[1,2,3], [4,5,6], [7,8,9] ];

for (let i = 0; i < numbs.length; i++){
  for(let j=0; j < numbs[i].length; j++) {
    console.log(i, j,numbs[i],numbs[i][j]);
  }
}

// const obj = {
//   '3': 123,
//   '1': 321,
//   "5": 453,
// }

// for (let i = 0; i < Object.keys(obj).length; i++){
//   console.log(i , Object.keys(obj), Object.keys(obj)[i], obj[Object.keys(obj)[i]]);
// }

// const v = 5;

// console.log(v, obj[v]);
// for (let key in obj){
//   console.log(key, obj[key]);
// }

// for (let value of numbs){
//   console.log(value);
// }


const n = [1,2,3,4];

function min(arr){gi
  let result = 0;

  for( let val of arr){
    if(val < result){
      result = val;
    }
  }
  return result;
}

function max(arr){
  let result = 0;

  for( let val of arr){
    if(val > result){
      result = val;
    }
  }
  return result;
}

function average (arr){
  let result = 0;
 
  for( let val of arr){
    result = result + val;
  }
  return result / arr.length;
}

console.log(min(n));
console.log(max(n));
console.log(average(n));

