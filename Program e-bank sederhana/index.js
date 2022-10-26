/////////////////////////////////////////////////
//                Kelompok 12                  // 
//                                             //  
//         Rizky Nugraha Herliyanto            //   
//        Fawwaz Muhammad Zulfikar             //  
//           Renna Nur Injayani                //     
//                                             // 
//          *Powered by Node.Js*               //      
//                                             //       
/////////////////////////////////////////////////       
//                                             //      
//                                             //    
////////////////////////                       //
//                    //                       //  
//      INISIASI      //                       // 
//                    //                       //  
/////////////////////////////////////////////////

// inisiasi input menggunakan prompt
const prompt = require('prompt-sync')({ sigint: true });
// inisiasi package chalk yang berfungsi untuk memberi warna pada teks
const chalk = require('chalk');
// inisiasi warna merah dengan nama const warning
const warning = chalk.bold.red;

// inisiasi session untuk daftar dan login
var register = false;
var session = false;

// inisiasi variabel
var people = [];
var res;

////////////////////////
//                    //
//  OBJECT OF ARRAY   //
//    * anggota *     //
//                    //
////////////////////////

const anggota = [{
  nama: "| [" + chalk.bold.white`+` + "] Rizky Nugraha Herliyanto\t\t\t\t\t\t\t\t|"
},
{
  nama: "| [" + chalk.bold.white`+` + "] Fawwaz Muhammad Zulfikar\t\t\t\t\t\t\t\t|"
},
{
  nama: "| [" + chalk.bold.white`+` + "] Renna Nur Injayani\t\t\t\t\t\t\t\t\t|"
}];


////////////////////////
//                    //
//       CLASS        //
//    * Person *      //
//                    //
////////////////////////

class Person {

  // constructor
  constructor(name, username, norek, pin, saldo) {
    this.name = name;
    this.username = username;
    this.norek = norek;
    this.pin = pin;
    this.saldo = saldo;

  }

  /**
    * function di dalam class disebut method
    */

  // arrow Function untuk format currency mata uang rupiah 
  NilaiRupiah = (jumlah) => {
    var titik = '.';
    var nilai = new String(jumlah);
    var pecah = [];
    while (nilai.length > 3) {
      var asd = nilai.substr(nilai.length - 3);
      pecah.unshift(asd);
      nilai = nilai.substr(0, nilai.length - 3);
    }
    if (nilai.length > 0) { pecah.unshift(nilai); }
    nilai = pecah.join(titik);
    return nilai;
  }

  // arrow function untuk melihat informasi saldo
  cekSaldo = () => {
    console.clear();
    console.log('\n\t\t\t===================================');
    console.log('\t\t -= ' + chalk.bold.white`Saldo anda saat ini adalah sebesar: ` + '=-' + `\n\t\t -= \t\t\t` + chalk.bold.cyan`Rp.${this.NilaiRupiah(res.saldo)}-,` + '\t\t\t=-');
    console.log('\t\t\t===================================\n');
  }
  // arrow function untuk mengambil saldo
  ambilUang = (ambil) => {
    console.log('\n\t\t\t===================================');
    console.log('\t\t -= ' + chalk.bold.white`\tAnda mengambil uang sejumlah:\t` + '=-' + `\n\t\t -= \t\t\t` + chalk.bold.cyan`Rp.${this.NilaiRupiah(ambil)}-,` + '\t\t\t    =-');
    this.transaksi(ambil);
    console.log('\t\t\t===================================\n');
  }

  // arrow function untuk menambah saldo
  tambahUang = (tambah) => {
    console.clear();
    console.log('\n\t\t\t===================================');
    console.log('\t\t -= ' + chalk.bold.white`\tAnda menambah uang sejumlah: ` + '\t=-' + `\n\t\t -= \t\t\t` + chalk.bold.cyan`Rp.${this.NilaiRupiah(tambah)}-,` + '\t\t\t=-');
    console.log('\t\t\t===================================\n');
    res.saldo += tambah;
  }

  // arrow function untuk menstransfer saldo
  transfer = () => {
    var no = Number(prompt('Masukkan rekening tujuan\t: '));
    var nominal = Number(prompt('Masukkan jumlah kiriman\t\t: '));
    var resultNorek = people.find(akunz => akunz.norek == no)

    // kondisi jika no rekening tidak ada/tidak cocok di array of object akun
    if (typeof (resultNorek) == 'undefined') {
      console.log('\n\t\t\t ===================================');
      console.log('\t\t  -= ' + warning(` [Nomor Rekening tidak ditemukan!]`) + '  =-');
      console.log('\t\t\t ===================================\n');

      // kondisi jika inputan no sama dengan object resultNorek dari norek
    } else if (no == resultNorek.norek) {
      console.log(chalk.bold.white`\nAnda akan mentransfer sejumlah ${chalk.bold.cyan('Rp.' + this.NilaiRupiah(Number(nominal)))}\nke akun: ` + chalk.bold.cyan`${resultNorek.name}\n` + chalk.bold.white`dengan No Rekening: ` + chalk.bold.cyan`${resultNorek.norek}`);
      var choose = prompt(chalk.bold.white`Apakah benar data tersebut? (` + chalk.bold.green`y` + `/` + chalk.bold.red`n` + `)`);
      if (choose === 'y') {
        console.clear();
        console.log(chalk.bold.green`\n\t\t\t\t Transaksi sedang diproses...`);
        console.log('\n\t\t\t====================================');
        this.transaksi(nominal);
        resultNorek.saldo += nominal;
        console.log('\t\t\t====================================\n');
      } else {
        console.log('\n\t\t\t ===================================');
        console.log('\t\t   -=\t' + warning(`[Transaksi dibatalkan user!]`) + '\t=-');
        console.log('\t\t\t ===================================\n');
      }
    }
  }

  // arrow function untuk melihat menu pembelian lainnya
  menuLain = () => {
    console.log('Menu Tambahan: ');
    console.log('[' + chalk.bold.white`1` + '] Pulsa');
    console.log('[' + chalk.bold.white`2` + '] Listrik');
    console.log('[' + chalk.bold.red`0` + '] Kembali');
    var masuk = prompt('Pilihan Anda\t\t\t: ');
    switch (Number(masuk)) {
      // Menu-1 Pembelian Pulsa 
      case 1:
        var no = prompt('Masukkan No.Hp(081/083/089)\t: ');
        var nominal = prompt('Masukkan Nominal\t\t\t: ');
        var tipe;
        switch (no.substring(0, 3)) {
          case "081":
            tipe = "Telkomsel";
            break;
          case "083":
            tipe = "Axis";
            break;
          case "089":
            tipe = "Tri";
            break;
          default:
            tipe = warning("[Tidak terdeteksi !]");
        }
        console.log('\n\t\t  ' + chalk.bold.white`Pengisian untuk no: ${no} (${tipe})\t\n\t\t\t\t\t\tsejumlah ${chalk.bold.cyan('Rp.' + this.NilaiRupiah(nominal))}`);
        console.log('\n\t\t\t===================================');
        this.transaksi(nominal);
        console.log('\t\t\t===================================\n');
        break;
      case 2:
        // Menu-1 Pembelian Pulsa
        no = prompt('Masukkan No Pelanggan\t: ');
        nominal = prompt('Masukkan Nominal\t\t: ');
        console.log('\n\t\t\t\t' + chalk.bold.white`Pengisian untuk no: ${no} \t\n\t\t\t\t\tsejumlah ${chalk.bold.cyan('Rp.' + this.NilaiRupiah(nominal))}`);
        console.log('\n\t\t\t===================================');
        this.transaksi(nominal);
        console.log('\t\t\t===================================\n');
        break;
      case 0:
        // Menu-0 Exit Menu disini
        break;
      default:
        console.log('\n\t\t\t ===================================');
        console.log('\t\t   -=\t' + warning(`\t[Fitur tidak tersedia!]`) + '\t\t=-');
        console.log('\t\t\t ===================================\n');
    }
  }

  // arrow function untuk melakukan sebuah transaksi seperti pada transaksi transfer dan mengambil saldo
  transaksi = (trans) => {
    if (res.saldo < trans) {
      console.log(warning(`\n\t\t\t\tTransaksi Tidak Dapat dilanjutkan \n\t\tUang anda Tidak Mencukupi untuk Transaksi ini\n\t\t\t\t\tSisa Saldo anda sebesar\n\t\t\t\t\t\t ` + chalk.bold.cyan`Rp.${this.NilaiRupiah(res.saldo)}-,`));
    } else {
      console.log('\t\t -=' + chalk.bold.green`\t\t   [Transaksi Berhasil !]` + '\t\t=-');
      return res.saldo -= trans;
    }
    return res.saldo;
  }
}

////////////////////////
//                    //
//        CLASS       //
//      * Menu *      //
//                    //
///////////////////////////////////////////////////////////////////////////////////////
// Inheritance
// dari class Person
class Menu extends Person {

  // constructor
  constructor(name,username,norek,pin,saldo){
    super(name,username,norek,pin,saldo);
  }

  addPerson = (name, username, norek, pin, saldo) => {
    var p = new Person(name, username, norek, pin, saldo); 
    people.push(p);
  }

  tampilMenu = () => {
    //////////////////////////////////////
    //                                  //
    //      Main Menu Aplikasi bank     //
    //                                  //
    //////////////////////////////////////////////////////////////////////////////////
    // Session == true : jika user sudah login
    // Session == false : jika user belum login
    // Register == true : jika user sudah register/login
    // Register == false : jika user belum register/login

    // Main menu dari program bank
    var pilih;
    var menuz = new Menu();
    console.log('')
    console.log('=============================================================')
    console.log('|\t\t\t\t* * * ' + ' M a i n\tM e n u ' + ' * * *\t\t\t\t|')
    console.log('|===========================================================|')
    console.log('|\t\t\t  Selamat Datang di e-Bank Sejahtera\t\t\t|');
    console.log('|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|');
    console.log('| Kelompok: \t\t\t\t\t\t\t\t\t\t\t\t|')
    // looping untuk mencetak nama anggota 
    for (let i = 0; i < anggota.length; i++) {
      console.log(anggota[i].nama);
    }
    console.log('|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|');
    do {
      console.log('=============================================================');
      // jika session true / sudah login maka akan mencetak menu ini
      if (session == true) {
        console.log('|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|');
        console.log(`|\t\t\t\tSelamat datang ${chalk.bold.white(res.name)}\t\t\t\t`);
        console.log('|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|');
      }
      console.log('| Daftar Layanan:\t\t\t\t\t\t\t\t\t\t\t|');
      // jika session false / belum login maka akan mencetak menu ini
      if (session == false) {
        console.log('| [' + chalk.bold.white`1` + '] Login\t\t\t\t\t\t\t\t\t\t\t\t\t|');
        console.log('| [' + chalk.bold.white`2` + '] Register\t\t\t\t\t\t\t\t\t\t\t\t|');
        console.log('| [' + chalk.bold.red`0` + '] Exit\t\t\t\t\t\t\t\t\t\t\t\t\t|');
        // jika session true / sudah login maka akan mencetak menu ini
      } else {
        console.log('| [' + chalk.bold.red`3` + '] Logout\t\t\t\t\t\t\t\t\t\t\t\t|');
        console.log('| [' + chalk.bold.white`4` + '] Cek Saldo\t\t\t\t\t\t\t\t\t\t\t\t|');
        console.log('| [' + chalk.bold.white`5` + '] Transfer Saldo\t\t\t\t\t\t\t\t\t\t|');
        console.log('| [' + chalk.bold.white`6` + '] Ambil Uang\t\t\t\t\t\t\t\t\t\t\t|');
        console.log('| [' + chalk.bold.white`7` + '] Tambah Saldo\t\t\t\t\t\t\t\t\t\t\t\|');
        console.log('| [' + chalk.bold.white`8` + '] Menu Lainnya\t\t\t\t\t\t\t\t\t\t\t|');
      }
      console.log('=============================================================')
      console.log('\nMasukkan Pilihan')
      pilih = prompt('-> ');
      switch (Number(pilih)) {


        ////////////////////////
        //                    //
        //       Menu-1       //
        //     Menu Login     //
        //                    //
        ////////////////////////

        case 1:
          // kondisi jika session false/belum login maka akan diarahkan kesini
          if (session == false) {
            var userLog = prompt('Masukkan username\t\t: ');
            var pinLog = Number(prompt('Masukkan pin rekening\t: '));
            console.clear();
            res = people.find(akunz => akunz.username === userLog && akunz.pin === pinLog)
            try {
              // kondisi jika array of object berisi 'undefined'
              // maka akan diarahkan kesini
              if (typeof (res) == 'undefined') {
                console.log('\n\t\t\t ===================================');
                console.log('\t\t   -=\t' + warning(` [Username atau Pin salah !]`) + '\t=-');
                console.log('\t\t\t ===================================\n');
                break;
                // kondisi jika inputan userlog dan pinlog sama dengan data di array of object
                // maka akan diarahkan kesini
              } else if (userLog === res.username && pinLog === res.pin) {
                register = true;
                session = true;
                console.log('\n\t\t\t ===================================');
                console.log('\t\t   -=  \t\t' + chalk.bold.green` [Login Berhasil !]` + '\t\t\t=-');
                console.log('\t\t\t ===================================\n');
                break;
              }
            } catch (e) {
              console.log('error');
            }
            // kondisi jika session true/sudah login maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -=  \t\t' + warning(` [Anda sudah login !]`) + '\t\t=-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-2       //
        //   Menu Register    //
        //                    //
        ////////////////////////
        case 2:
          if (session == false) {
            var name = prompt('Masukkan Nama Lengkap\t: ');
            var user = prompt('Masukkan Username\t\t: ');
            var norek = Number(prompt('Masukkan Nomor Rekening\t: '));
            var pin = Number(prompt('Masukkan Pin Rekening\t: '));
            var conpin = Number(prompt('Masukkan ulang pin\t\t: '));
            console.clear();
            if (pin !== conpin) {
              console.log('\n\t\t\t ===================================');
              console.log('\t\t   -= ' + warning(`\t\t [Pin tidak cocok !]`) + ' \t\t=-');
              console.log('\t\t\t ===================================\n');
              break;
            } else {
              console.log('\n\t\t\t ===================================');
              console.log('\t\t   -=  \t ' + chalk.bold.green` [Registrasi Berhasil !]` + '\t\t=-');
              console.log('\t\t\t ===================================\n');
              // memasukkan data yang di inputkan user
              // kedalam array of object akun dengan method push

              menuz.addPerson(name, user, norek, pin, 0);
              break;
            }
            // kondisi jika session true/sudah login maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`\t [Logout terlebih dahulu !]`) + ' \t=-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-3       //
        //    Menu Logout     //
        //                    //
        ////////////////////////
        case 3:
          // kondisi jika session true/sudah login/sudah daftar
          // maka akan diarahkan kesini
          if (register === true) {
            // dan membuat session registernya menjadi bernilai false
            // ketika user logout 
            register = false;
            session = false;
            console.clear();
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -=  \t ' + chalk.bold.green` [Anda berhasil logout !]` + '\t\t=-');
            console.log('\t\t\t ===================================\n');
            break;
            // kondisi jika session false/belum login
            // maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`[Silahkan Login terlebih dahulu !]`) + ' =-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-4       //
        //   Menu Cek Saldo   //
        //                    //
        ////////////////////////
        case 4:
          // kondisi jika register true/sudah login
          // maka akan diarahkan kesini
          if (register === true) {
            // diarahkan ke arrow function cekSaldo
            menuz.cekSaldo();
            break;
            // kondisi jika register false/belum login
            // maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`[Silahkan Login terlebih dahulu !]`) + ' =-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-5       //
        //   Menu Transfer    //
        //                    //
        ////////////////////////
        case 5:
          // kondisi jika register true/sudah login
          // maka akan diarahkan kesini
          if (register === true) {
            // diarahkan ke arrow function transfer
            menuz.transfer();
            break;
            // kondisi jika register false/belum login
            // maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`[Silahkan Login terlebih dahulu !]`) + ' =-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-6       //
        //   Menu Ambil Uang  //
        //                    //
        ////////////////////////
        case 6:
          // kondisi jika register true/sudah login
          // maka akan diarahkan kesini
          if (register === true) {
            // diarahkan ke arrow function ambilUang dengan parameter inputan saldo yang akan diambil
            var ambil = prompt('Masukkan Uang yang anda ambil: Rp.');
            menuz.ambilUang(ambil);
            break;
            // kondisi jika register false/belum login
            // maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`[Silahkan Login terlebih dahulu !]`) + ' =-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-7       //
        //  Menu Tambah Uang  //
        //                    //
        ////////////////////////
        case 7:
          // kondisi jika register true/sudah login
          // maka akan diarahkan kesini
          if (register === true) {
            // diarahkan ke arrow function tambahUang dengan parameter inputan saldo berupa jumlahnya
            var tambah = prompt('Masukkan uang yang anda tambah: Rp.');
            menuz.tambahUang(Number(tambah));
            break;
            // kondisi jika register false/belum login
            // maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`[Silahkan Login terlebih dahulu !]`) + ' =-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-8       //
        //    Menu Lainnya    //
        //                    //
        ////////////////////////
        case 8:
          // kondisi jika register true/sudah login
          // maka akan diarahkan kesini
          if (register === true) {
            // diarahkan ke arrow function menu lain
            // seperti pembelian pulsa dan listrik
            menuz.menuLain();
            break;
            // kondisi jika register false/belum login
            // maka akan diarahkan kesini
          } else {
            console.log('\n\t\t\t ===================================');
            console.log('\t\t   -= ' + warning(`[Silahkan Login terlebih dahulu !]`) + ' =-');
            console.log('\t\t\t ===================================\n');
            break;
          }

        ////////////////////////
        //                    //
        //       Menu-0       //
        //     Menu Exit      //
        //                    //
        ////////////////////////
        case 0:
          // jika user memilih menu 0 akan mentrigger perulangan do whilenya
          // yang dimana tidak boleh sama dengan 0
          // jiak sama programnya keluar
          console.log(chalk.bgMagenta`Terimakasih sudah menggunakan layanan kami`);
          break;

        /////////////////////
        //                 //
        //   Menu Default  //
        //                 //
        /////////////////////

        default:
          // jika user memilih menu yang tidak ada/tidak cocok
          // maka akan mencetak layanan tidak tersedia
          console.log('\n\t\t\t ===================================');
          console.log('\t\t   -=\t' + warning(` [Layanan tidak tersedia !]`) + '\t\t=-');
          console.log('\t\t\t ===================================\n');

      }

    } while (pilih != 0);
  }

}

// membuat instance
const newMenu = new Menu();

// memanggil method tampilmenu dari instance newMenu
newMenu.tampilMenu();
