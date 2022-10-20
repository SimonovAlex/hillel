// const tree = {
//   name: 'html',
//   child: [{
//     name: 'head',
//     child: [{
//       name: "meta1",
//     },{
//       name: "meta2",
//       child: [{
//         name: "meta2meta",
//       }]
//     },{
//       name: "meta3",
//       child: []
//     }]
//   },{
//     name: 'body',
//     child: [{
//       name: 'div',
//       child: [{
//         name:"p",
        
//       }]
//     }]
//   },
// ]
// }


// function recurs(node){
//   if(node.child){
//     for (let item of node.child){
//       recurs(item)
//     }
//   }

//   console.log(node.name);
// }


// recurs(tree);

// console.log('tree', tree);

// 1 1 2 3 5 8 13 21 


function fib(numb){
  // let a = fib(numb - 1);
  // let b = fib(numb - 2); 

  if(numb){
    // a = b; 
    // b = a + b;
    console.log(numb)
    return fib(numb - 1);
  }
};

console.log( fib(8))

