"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    addElement(element) {
        this.data.push(element);
    }
    addMultipleElement(...elements) {
        this.data.push(...elements);
    }
    getAllElement() {
        return this.data;
    }
}
const stringElement = new List('Yudistira');
const printMyList = stringElement.getAllElement();
stringElement.addElement('089790909989');
stringElement.addMultipleElement('Cianjur', 'Fullstack Web Developer', 'github.com/tamathecxder');
console.log(printMyList);
const numberElement = new List(12345);
numberElement.addElement(212);
console.log(numberElement);
const random = new List('Ini string', 567, { gender: "Male" });
console.log(random);
