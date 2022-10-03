"use strict";
class Vehicle {
    start() {
        console.log('Vroommmm!');
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
        this.vendor = "Honda";
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
        this.vendor = "Supra";
    }
}
const exCar = new Car();
console.log(exCar);
const exMotor = new Motorcycle();
console.log(exMotor);
