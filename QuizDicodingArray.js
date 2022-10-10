/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
const evenNumber = [];

let angka;

for(let angka = 1; angka <= 100; angka++){

 if((angka%2)==0){

   evenNumber.push(angka);

 }

}

console.log(evenNumber);
/**
 * Jangan hapus kode di bawah ini
 */

module.exports = evenNumber;
