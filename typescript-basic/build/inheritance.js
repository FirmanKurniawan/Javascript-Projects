"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // 
    }
    setName(name) {
        console.log(this);
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
const user1 = new User('Agus', 12);
user1.setName('Wibowo');
const printName = user1.getName();
/**
 * User (Parent Class)
 *  => Admin
 *  => Member
 */
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getBehaviour() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    static getSalary() {
        return this.salary;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    get email() {
        return this._email;
    }
}
Admin.role = "admin";
Admin.salary = "Rp. 7.500.000,00";
const admin1 = new Admin('Siti Karamoy', 19, '089878787767');
console.log(admin1);
// static method & static property
const printCurrentRole = Admin.role;
console.log(printCurrentRole);
const printCurrentSalary = Admin.getSalary();
console.log(printCurrentSalary);
