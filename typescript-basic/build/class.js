"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, role) {
        this.role = role;
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.Employee = Employee;
// public = accessible from everywhere
// private = accessible only from within the class
// protected = accessible from within the class and from inherited classes
/**
 * Employee parent
 *  Admin = child of Employee
 *  Manager = child of Employee
 *  Operator = child of Employee
 */
class Admin extends Employee {
    constructor(name, phone, role) {
        super(name, role); // super adalah untuk memanggil constructor dari parent class
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
}
const admin1 = new Admin('Ahmad', '087878766675', 'Admin');
console.log(admin1);
console.log(admin1.getRole());
admin1.email = "ahmadsurabaya@admin.com";
console.log(admin1.email);
