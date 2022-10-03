"use strict";
class Acer {
    constructor(brandName, operatingSystem) {
        // unique property
        this.isGaming = true;
        this.brandName = brandName;
        this.operatingSystem = operatingSystem;
    }
    onProcess() {
        console.log("Laptop is ON");
    }
    offProcess() {
        console.log("Laptop is OFF");
    }
}
class Lenovo {
    constructor(brandName, operatingSystem) {
        // unique property
        this.isHaveBacklight = true;
        this.brandName = brandName;
        this.operatingSystem = operatingSystem;
    }
    onProcess() {
        console.log("Laptop is ON");
    }
    offProcess() {
        console.log("Laptop is OFF");
    }
}
const acer1 = new Acer("Acer Aspire 3 A315", "Windows 10");
const lenovo1 = new Lenovo("Lenovo Thinkpad X1", "Kali Linux");
console.log(acer1);
console.log(lenovo1);
