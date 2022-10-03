import LaptopInterface from "./LaptopInterface";
import * as Keyboard from "./Keyboard";
import { shift, capslock } from "./Keyboard";

abstract class Laptop<T> implements LaptopInterface<T> {
  public name: string;
  public type: T;
  public withNumeric: boolean;
  public withTouchpadButtons: boolean;

  constructor(name: string, type: T, withNumeric: boolean, withTouchpadButtons: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchpadButtons = withTouchpadButtons;
  }

  handleBackspace(): void {
    console.log(Keyboard.backspace());
  }
  
  handleEnter(): void {
    console.log(Keyboard.enter());
  }

  handleCapslock(): void {
    console.log(capslock());
  }

  handleShift(): void {
    console.log(shift());
  }
}

export default Laptop;
