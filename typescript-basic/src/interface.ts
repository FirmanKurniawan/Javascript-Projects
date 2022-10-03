interface Laptop {
  brandName: string;
  operatingSystem: string;
  
  onProcess(): void;
  offProcess(): void;
}

class Acer implements Laptop {
  brandName: string;
  operatingSystem: string;

  // unique property
  isGaming: boolean = true;

  constructor(brandName: string, operatingSystem: string) {
    this.brandName = brandName;
    this.operatingSystem = operatingSystem;
  }
  
  onProcess(): void {
    console.log("Laptop is ON")
  }
  offProcess(): void {
    console.log("Laptop is OFF")
  }
}

class Lenovo implements Laptop {
  brandName: string;
  operatingSystem: string;

  // unique property
  isHaveBacklight: boolean = true;

  constructor(brandName: string, operatingSystem: string) {
    this.brandName = brandName;
    this.operatingSystem = operatingSystem;
  }
  
  onProcess(): void {
    console.log("Laptop is ON")
  }
  offProcess(): void {
    console.log("Laptop is OFF")
  } 
}

const acer1 = new Acer("Acer Aspire 3 A315", "Windows 10");
const lenovo1 = new Lenovo("Lenovo Thinkpad X1", "Kali Linux");

console.log(acer1);
console.log(lenovo1);