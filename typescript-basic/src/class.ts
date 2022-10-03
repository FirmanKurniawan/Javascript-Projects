export class Employee {
  public name: string;
  constructor(name: string, public role: string) {
    this.name = name;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

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
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  
  constructor(name: string, phone: string, role: string) {
    super(name, role); // super adalah untuk memanggil constructor dari parent class
    this.phone = phone;
  }
  
  getRole(): {read: boolean, write: boolean} {
    return {
      read: this.read,
      write: this.write
    };
  };

  set email(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }
}

const admin1 = new Admin('Ahmad', '087878766675', 'Admin');

console.log(admin1);
console.log(admin1.getRole());

admin1.email = "ahmadsurabaya@admin.com";
console.log(admin1.email);