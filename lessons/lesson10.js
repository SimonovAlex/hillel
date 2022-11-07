// // const myPref = document.getElementById("myP");
// // const myPsRef = document.getElementsByTagName("p");

// const sel = document.querySelector('#myP');

// // const arrP = [...myPsRef];

// // console.log(sel);

// // sel.innerText = '<span>my span<span/>'

// // // sel.innerHTML = '<span>my span<span/>'

// const mySpan = document.createElement('span');
// mySpan.innerText = 'test';
// sel.classList.add('myClass');
// sel.classList.remove('qwe');
// const mySpan1 = document.createElement('span');
// mySpan1.innerText = 'test 123';
// sel.appendChild(mySpan);


// mySpan.appendChild(mySpan1);

// // sel.appendChild(mySpan);

// console.dir(sel.dataset.tested);



const btnRef = document.createElement('button');
btnRef.setAttribute('type', 'submit');
btnRef.setAttribute('data-numb', '7');

btnRef.innerText = 'click me!'

const  clickHandler = (e) => {
  console.log(e, arguments);
  // console.log('click',   e.target.getAttribute('type'));


  // btnRef.removeEventListener('click', clickHandler);
}

btnRef.addEventListener('click', clickHandler);

document.body.append( btnRef);




// const divsRef = [...document.querySelectorAll('div')];


// function clickHandler (e) {
//   // e.preventDefault();
//   // e.stopPropagation();
//   console.log(e)
// }

// document.body.addEventListener('click', clickHandler, false)
// 
// divsRef.forEach(item => item.addEventListener('click', clickHandler))


// console.log(divsRef);




// const allPRef = [...document.querySelectorAll('p')];

// allPRef.reverse();

// document.body.innerHTML = '';
// document.body.append(...allPRef)


ref => target, innerText, innerHTML , classList, setAttribute(), getAttribute(), append(), querySelector*(),