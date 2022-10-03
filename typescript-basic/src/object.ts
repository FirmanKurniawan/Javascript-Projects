/**
 * Object
 */

type Person = {
  name: string;
  age: number;
  greet(): void;
};

let person: Person = {
  name: 'Max',
  age: 30,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

person.greet() 