import Acer from './class/Acer';
import Toshiba from './class/Toshiba';

const acer = new Acer("Aspire 13 A315-41G-R5RI", true, false);
const toshiba = new Toshiba("Portege X30", false, false);

console.log(acer);
console.log(acer.handleBackspace());

console.log(toshiba);
console.log(toshiba.handleEnter());
