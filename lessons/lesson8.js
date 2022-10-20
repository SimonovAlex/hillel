
class CoffeeRecept {

  #coast = 0;  
  #sugar = 0;
  volume = 0;
  coffee = 0;

  constructor(){
    // this.volume = volume;
    // this.coffee = volume;

    // this.#coast = coast;
  }

  setSugar(value = 0){
    this.#sugar = this.#sugar + value;
    this.#coast = this.#coast + value * 5;
  }

  addSugar(){
    this.#sugar = this.#sugar + 1;
    this.#coast = this.#coast + 5;
  }

  get coast(){
    return this.#coast;
  }

  getSugar(){
    return this.#sugar;
  }

  cookingEspresso(mult = 1) {
    this.coffee = this.coffee + 15 * mult;
    this.#coast = this.#coast + 20 * mult;
    this.volume = this.volume;
  }

  getInfo() {
    return {
      coffee : this.coffee,
      volume: this.volume,
      coast: this.#coast,
      sugar: this.#sugar,
    }
  }
}


// };

// obj.test();

// const coffee = new CoffeeRecept(20, 10);

// for(let i = 0; i < 3; i ++){
//   coffee.addSugar();
// }
// coffee.setSugar(4);


// console.log(coffee.getSugar(), coffee.coast)

class EspressoRecept extends CoffeeRecept{
  constructor(){
    super();
    this.cookingEspresso();
  }
}


const espresso = new EspressoRecept(20, 5);
espresso.addSugar();


console.log(espresso);

class AmericanoRecept extends CoffeeRecept {
  constructor(water){
    super();
    this.cookingEspresso();
    this.water = water;
    this.volume = this.volume + water;
  }

  getInfo(){
    const result = super.getInfo();
    return {
      ...result,
      water: this.water
    }
  }

  addWater(water){
    this.water = this.water + water;
    this.volume = this.volume + water;
  }
}

const americano = new AmericanoRecept(30);
console.log(americano);
americano.cookingEspresso(2);
americano.addWater(400);
americano.cookingEspresso();

// console.log(americano.getInfo())

class LatteRecept extends CoffeeRecept{
  constructor(milk){
    super(20);

    this.volume = this.volume + milk;
    this.coffee = this.coffee;
    this.milk = milk;
  }
}

class DoubleLatteRecept {
  constructor(){
    const firstLatte = new LatteRecept(50);
    const secondLatte = new LatteRecept(50);

    this.volume = firstLatte.volume + secondLatte.volume;
    this.coffee = firstLatte.coffee + secondLatte.coffee;
    this.milk = firstLatte.milk + secondLatte.milk;
  }
}

// const latte = new DoubleLatteRecept(30);

// const americano = new AmericanoRecept(30);
// const americano2 = new AmericanoRecept(50);
// americano.setSugar(3);
// console.log(americano);
// console.log(americano2);
// console.log(americano.coast, americano2.coast);
// console.log(americano.getSugar(), americano2.getSugar());



