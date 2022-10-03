abstract class Vehicle {
  abstract wheels: number;
  abstract vendor: string;
  
  start(): void {
    console.log('Vroommmm!');
  }
}

class Car extends Vehicle {
  wheels: number = 4;
  vendor: string = "Honda";
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
  vendor: string = "Supra";
}

const exCar = new Car();
console.log(exCar);

const exMotor = new Motorcycle();
console.log(exMotor);