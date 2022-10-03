import Laptop from '../Laptop';

class Acer<T> extends Laptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchpadButtons: boolean) {
    super("Acer", type, withNumeric, withTouchpadButtons);
  }
}

export default Acer;