 
 class Animal {

  static instance;

  static getInstance(){
    if(Animal.instance){
      return Animal.instance
    }else{
      Animal.instance = new Animal('first');
      return Animal.instance
    }
  }

  #name;

  constructor(name){
    this.#name = name;
  }

  sayHi(name){
    console.log('hi', name);
    console.log(this)
  }

  getName(){
    return this.#name;
  }

  setName(name){
    if(name === 'Dog'){
      return
    }
    this.#name = name
  }

  get fullName(){
    return this.#name + ' Cat';
  }

  set fullName(fullname){
    const name = fullname.split(" ")[0]

    this.#name = name
  }

 }

// const animal = new Animal('Vasya');
// const animal1 = new Animal('Petya');


// animal.sayHi('Petya');
// console.log(animal);

// animal1.sayHi('test');
// console.log(animal1);

class Cat extends Animal {

  constructor(name){
    super(name);
  }



  sayHi(name){

    console.log("cat's hi")
    // super.sayHi(name);
  }  

}

class Dog extends Animal{
  constructor(name){
    super(name);
  }
}


const cat = new Cat('Cat');

// cat.sayHi('all');

// console.log(cat.getName());
// cat.setName('Dog');
// console.log(cat.getName());
// console.log(cat.fullName)
// cat.fullName = 'test asd'

// console.log(cat.fullName)

// console.log(cat instanceof Object)
// console.log(typeof cat)

// cat.sayHi();
// cat.sayHi('vasya');
// console.log(cat.__proto__.sayHi())


// console.log(Animal.type)
// Animal.testStatic();


const test = Animal.getInstance();
const test2 = Animal.getInstance();


const test3 = new Animal('second');
const test4 = new Animal('second');

const cat3 = Cat.getInstance();

console.log(test === test2,cat3);