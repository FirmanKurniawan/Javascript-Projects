class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  addElement(element: T): void {
    this.data.push(element);
  }

  addMultipleElement(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAllElement(): T[] {
    return this.data;
  }
}

const stringElement = new List<string>('Yudistira');
const printMyList = stringElement.getAllElement();

stringElement.addElement('089790909989');
stringElement.addMultipleElement('Cianjur', 'Fullstack Web Developer', 'github.com/tamathecxder');
console.log(printMyList);

const numberElement = new List<number>(12345);
numberElement.addElement(212);
console.log(numberElement);

const random = new List<string | object | number>('Ini string', 567, { gender: "Male" });
console.log(random);

