"use strict";
/**
 * Object
 */
let person = {
    name: 'Max',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
person.greet();
