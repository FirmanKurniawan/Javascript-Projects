export default interface Laptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchpadButtons: boolean;
}