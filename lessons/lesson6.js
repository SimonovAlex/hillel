
// function test () {
//   console.log('test');
// }


// const obj = {
//   test: test,
// }

// obj.test();

// function test (a,b) {
//   const sum = a+b;
//   const minus = a-b;

  // return {
  //   sum: sum,
  //   minus
  // }
// }

// console.log('test', test(3,7));




// function test () {

 
//   function sum (a){
//     const b = 7

//     const a = 5;

//     return a+b;
//   } 

//    return {
//     sum: sum,
//   }
// }

// function min () { 
//   return a - b ;
// }

// console.log('test', test(), test().sum(0));
// console.log('sum', sum(1,23));


// let makeCounter = function() {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }
// };

// let counter = makeCounter();
// console.log(counter.value()); 
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

// let counter2 = makeCounter();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.value());



// const test = {
//   prop: 42,
//   func: function() {
//     console.log(this);
    
//     return this.prop + this.ddd;
//   },
// };

// console.log(test.func.bind({prop: 12, ddd: 4})(), test.func());



// let makeCounter = function() {
//   let privateCounter = 0;

//   function changeBy(val) {
    
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }
// };

// let counter = makeCounter();
// console.log(counter.value()); 
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

// let counter2 = makeCounter();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.value());


// # # # 
//  # # 

// const pattern = '#_';
// let strPattern = '';
// for(let i = 0; i < 4; i++){
//   strPattern += pattern;
// }


// function test (a, b) {
//   let fullPatternArr = strPattern.split("");
//   let reverset = [...fullPatternArr].reverse()
//   let res = [];

//   for(let i = 0; i < 4; i++){
//       res.push(fullPatternArr)
//       res.push(reverset)
//   }
//   return res;
// }


// console.log(test());

function rep(str, inc, exc){
  const arr = str.split('');

  console.log(arr)

}


console.log(rep('test qwqe', ["q", 'r'], ["a", "l"]));



function rep(str, inc, exc){
  const arr = str.split('');

  // console.log(arr)

  // for(let i = 0; i < arr.length; i++){
  //   for(let j = 0; j < inc.length; j++){
  //     console.log(arr[i], inc[j]); 
  //     if(arr[i] === inc[j]){
  //       arr[i] = exc[j];
  //       break;
  //     }
  //   }
  // }

  const hash = {};

  for(let i = 0; i < str.length; i++){
    console.log(str[i])
    if(inc.includes(str[i])){
      if(hash[str[i]]){
        hash[str[i]].push(i)
      }else{
        hash[str[i]] = [i];
      }
    }
    
  }


  for(let key in hash){
    const index = inc.indexOf(key)
    for(let item of hash[key]){
      arr[item] = exc[index];
    }
  }

  return arr.join("")
}


console.log(rep('aabaaaa,b', ["a", 'b'], ["b", "c"]));