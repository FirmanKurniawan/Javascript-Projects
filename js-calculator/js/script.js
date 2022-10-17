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


// function untuk menghapus semua karakter pada layar
let hapusSemua = (obj) => {
    obj.innerHTML = '';
    operasi = [];
    desimal = false;
}

// function untuk perhitungan
let perhitungan = () => {
    let penentu = true;
    while(penentu) {
        // cek apakah array kosong
        if(operasi.length == 0) {
            break;
        }

        // jika element terakhir adalah operator
        if(typeof(operasi[operasi.length - 1]) == 'string') {
            operasi.pop();
        }
        
        // cek apakah ada operator dalam array operasi
        let patokan = false;
        for(let i = 0; i < operasi.length; i++) {
            if(typeof(operasi[i]) == 'string') {
                patokan = true;
                break;
            }
        }
        if(!patokan) {
            return operasi[0];
        }
    
        // jika ada operator dalam array operasi
        if(patokan) {
            let i = 0;
            let ulang = 1;
            while(true) { 
                if(ulang == 1 && (operasi[i] == 'x' || operasi[i] == '/')) { 
                    let angkaSebelum = operasi[i - 1];
                    let angkaSesudah = operasi[i + 1];
                    let hasil;
                    if(operasi[i] == 'x') {
                        hasil = angkaSebelum * angkaSesudah;
                    } else {
                        hasil = angkaSebelum / angkaSesudah;
                    }
                    operasi.splice(i - 1, 3, hasil);
                    break;
                }
                if(ulang == 2 && (operasi[i] == '+' || operasi[i] == '-')) { 
                    let angkaSebelum = operasi[i - 1];
                    let angkaSesudah = operasi[i + 1];
                    let hasil;
                    if(operasi[i] == '+') {
                        hasil = angkaSebelum + angkaSesudah;
                    } else {
                        hasil = angkaSebelum - angkaSesudah;
                    }
                    operasi.splice(i - 1, 3, hasil);
                    break;
                }
                if(i == operasi.length - 1) {
                    ulang++;
                    i = 0;
                }
                i++;
            }
        }
    }
}

// menampilkan angka dan menjalankan beberapa fungsi
buttons.forEach((el) => {
    el.addEventListener('click', (element) => {
        let kelas = el.classList.item(1);
        if(kelas == 'clear' || kelas == 'hapus' || kelas == 'samadengan' || kelas == 'perluas') {
            if(kelas == 'hapus') {
                hapusKarakter(text);
                console.log(operasi); // tes
            }
            if(kelas == 'clear') {
                hapusSemua(text);
                hapusSemua(text2);
            }
            if(kelas == 'samadengan' && operasi.length != 0) {
                text2.innerHTML = text.innerHTML;
                text.innerHTML = '= ' + perhitungan();
                operasi = [];
            }
            return;
        }
        if(kelas == 'titik' && operasi.length == 0) {
            return;
        }
        let penentu = kelas == 'percent' || kelas == 'bagi' || kelas == 'kali' || kelas == 'kurang' || kelas == 'tambah';
        if(penentu) {
            if(operasi.length == 0) {
                return;
            }
            if(typeof(operasi[operasi.length - 1]) == 'string') {
                return;
            }
        }
        if(operasi.length == 0) {
            text.innerHTML = '';
        }
        let teks = document.createTextNode(el.innerHTML);
        text.appendChild(teks);
        tambahElement(el.innerHTML);
    });
});