import Laptop from '../Laptop';

class Toshiba<T> extends Laptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchpadButtons: boolean) {
    super("Toshiba", type, withNumeric, withTouchpadButtons);
  }
}

export default Toshiba;