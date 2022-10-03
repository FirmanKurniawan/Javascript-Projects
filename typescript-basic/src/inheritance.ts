export class User {
  constructor(public name: string, public age: number) {
    // 
  }

  setName(name: string): void {
    console.log(this);
    this.name = name;
  }
  
  getName(): string {
    return this.name; 
  }
}

const user1 = new User('Agus', 12);
user1.setName('Wibowo');

const printName = user1.getName();

/**
 * User (Parent Class)
 *  => Admin
 *  => Member
 */

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static role: string = "admin";
  static salary: string = "Rp. 7.500.000,00";

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  getBehaviour(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  static getSalary(): string {
    return this.salary;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  } 

  get email(): string {
    return this._email;
  }
}

const admin1 = new Admin('Siti Karamoy', 19, '089878787767');
console.log(admin1);

// static method & static property
const printCurrentRole = Admin.role;
console.log(printCurrentRole);

const printCurrentSalary = Admin.getSalary();
console.log(printCurrentSalary);
