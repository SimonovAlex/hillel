

const str: string = 'asdf';
const nbr: number = 1123;
const b: boolean = true;
const n: null = null;
const und: undefined = undefined;

const obj: object = {};

type UserType = {name: string, age: number};

type ClocksType = "AM" | "PM" | UserType


const user: UserType = {name: 'Vasya', age: 15}
const car: Object = {number: 123, mark: 'Ford'}


console.log(user.name)


function greeter(cl: ClocksType, person: string) {

  if(cl === "AM"){
    return 'Hello, '+ person;
  }

  if(cl === "PM"){
    return "Hi, " + person;
  }

}
 
// let user = "Jane User";

console.log( greeter("AM", "Alex"));


interface PersonI {
  age: number,
  name: string,
  clocks?: ClocksType,

}

const p : PersonI = {age: 123, name: 'te'}