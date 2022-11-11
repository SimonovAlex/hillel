

// function fetchAnyThink (){
//   sleep(1000).then((d) => {
//     console.log(d)
//   });

//   console.log('fetch')
// }


async function testAsync () {
  const res = await sleep(1000);

  // try{
  //   const res = await sleep(1000);

  //   console.log('fetch', res);
  // }
  // catch(error){
  //   console.log('error', error)
  // }
  // finally{

  // }


}

console.log(testAsync());


function sleep (time) {
 return new Promise((_, r) => setTimeout(() => r('wake up'), time));
}


