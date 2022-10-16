// mengambil element html
const container = document.querySelector('.container');
const bawah = document.querySelector('.bawah');
const rata = document.querySelector('.bawah .rata');
const text = document.querySelector('.bawah .rata p');
const text2 = document.querySelector('.atas .rata p');
const buttons = document.querySelectorAll('.tombol');

// array operasi
let operasi = [];

// function untuk menambahkan element ke array operasi
let desimal = false;
let tambahElement = (input) => {
    let indexTerakhir = operasi.length - 1;

    // jika inputan adalah operator
    let ifOperator = input == '+' || input == '-' || input == 'x' || input == '/';
    if(ifOperator) {
        desimal = false;
    }

    // jika index terakhir sudah berupa desimal
    let bil = operasi[indexTerakhir];
    if((typeof(bil) == 'number') && (desimal)) {
        let turun = Math.floor(bil);
        let result = bil / turun;
        if(result != 1) {
            let angka = bil + '';
            let num = '';
            let titik = false;
            for(let i = 0; i < angka.length; i++) {
                if(angka[i] == '.') {
                    titik = true;
                    continue;
                }
                if(titik) {
                    num += angka[i];
                }
            }
            num += input;
            let pembagi = 1;
            for(let i = 0; i < num.length; i++) {
                pembagi *= 10;
            }
            let numIn = parseInt(num);
            let hasil = numIn / pembagi;
            let kebawah = Math.floor(operasi[indexTerakhir]) + hasil;
            operasi[indexTerakhir] = kebawah;
            return;
        }
    }

    // jika input titik dan index terkahir adalah number
    if((input == '.') && (typeof(operasi[indexTerakhir]) == 'number')) {
        desimal = true;
        return;
    }

    // jika sebelumnya menekan titik
    if((input / 0 == 3 / 0 || input / 0 == -3 / 0) && (desimal)) {
        let pembagi = 1;
        for(let i = 0; i < input.length; i++) {
            pembagi *= 10;
        }
        let bentukDesimal = parseInt(input) / pembagi;
        operasi[indexTerakhir] += bentukDesimal;
        return;
    }

    let penentu1 = input / 0 == 3 / 0 || input / 0 == -2 / 0 || input == 0;
    let penentu2 = typeof(operasi[indexTerakhir]) == 'number';
    if(operasi.length != 0 && penentu1 && penentu2) {
        let gabung = operasi[indexTerakhir] + input;
        let numberGabung = parseInt(gabung);
        operasi[indexTerakhir] = numberGabung;
    } else {
        if(input / 0 == 3 / 0 || input / 0 == -3 / 0 || input == 0) {
            let angka = parseInt(input);
            operasi.push(angka);
        } else {
            operasi.push(input);
        }
    }
}

// function untuk menghapus satu karakter pada layar
let hapusKarakter = (obj) => {
    let lastNode = obj.lastChild;
    if(lastNode == null) {
        return;
    }
    obj.removeChild(lastNode);
    let isi = obj.innerHTML;
    if(isi[isi.length - 1] == '.') {
        let lastNode = obj.lastChild;
        obj.removeChild(lastNode); 
    }

    // menghapus bilangan desimal
    let lastIndex = operasi.length - 1;
    let stop = false;
    if((operasi.length != 0) && (typeof(operasi[lastIndex]) == 'number')) {
        // apakah index terkahir adalah bilangan desimal
        let lastEl = operasi[lastIndex];
        let turun = Math.floor(lastEl);
        let hasil = lastEl / turun;
        if(hasil != 1) {
            // memisahkan angka dibelakang koma
            let angkas = operasi[lastIndex] + '';
            let lebihnya = '';
            let penentu = false;
            for(let i = 0; i < angkas.length; i++) {
                if(angkas[i] == '.') {
                    penentu = true;
                    continue;
                }
                if(penentu) {
                    lebihnya += angkas[i];
                }
            }

            // jika diblekang komanya satu angka
            if(lebihnya.length == 1) {
                let turun = Math.floor(operasi[lastIndex]);
                operasi[lastIndex] = turun;
                stop = true;
            } else { // jika belakang komanya lebih dari satu angka
                let baru = '';
                for(let i = 0; i < lebihnya.length - 1; i++) {
                    baru += lebihnya[i];
                }
                let pembagi = 1;
                for(let i = 0; i < baru.length; i++) {
                    pembagi *= 10;
                }
                let baruInt = parseInt(baru);
                let hasil = baruInt / pembagi;
                operasi[lastIndex] = Math.floor(operasi[lastIndex]);
                operasi[lastIndex] += hasil;
                stop = true;
            }
        }
    }

    if(stop) {
        return;
    }

    let lastElement = operasi[operasi.length - 1];
    let lastElementString = lastElement + '';
    if(lastElementString.length == 1) {
        operasi.pop();
    } else {
        let daftarKarakter = [];
        for(let i = 0; i < lastElementString.length; i++) {
            daftarKarakter.push(lastElementString[i]);
        }
        daftarKarakter.pop();
        let angkaString = '';
        daftarKarakter.forEach((el) => {
            angkaString += el;
        });
        let angkaInt = parseInt(angkaString);
        operasi[operasi.length - 1] = angkaInt;
    }
}