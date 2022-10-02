// pengenalan

alert('Anda harus memasukan nama terlebih dahulu');
var nama = prompt('Nama :');
alert('Selamat datang ' + nama + ' dan selamat bermain :)');var

tanya = true;
while( tanya == true) {

	// menangkap pilihan player
	var p = prompt('pilih : batu, gunting, kertas');

	// menangkap pilihan computer
	// membangkitkan bilangan rondom
	var com = Math.random();


	if( com < 0.34 ) {
		com = 'batu';
	} else if( com >= 0.34 && com < 0.67 ) {
		com = 'gunting';
	} else {
		com = 'kertas';
	}
	
	var hasil = '';


	// menentukan rules

	if( p == com ) {
		hasil = 'SERI!';
	} else if( p == 'batu' ) {
		if( com == 'gunting' ) {
			hasil = 'MENANG!';
		} else {
			hasil = "KALAH!";
		}
	} else if( p == 'gunting' ) {
		if( com == 'kertas' ) {
			hasil = 'MENANG!';
		} else {
			hasil = 'KALAH!';
		}
	} else if( p == 'kertas' ) {
		if( com = 'gunting') {
			hasil = 'KALAH!';
		} else {
			hasil = 'MENANG!';
		}
	} else {
		hasil = 'memasukan pilihan yang salah';
	}
		// tamplilkan hasilnya
	alert('Anda memilih : ' + p +' dan computer memilih : ' + com + '\nMaka hasilnya : Anda ' + hasil);
	console.log(p + ' + ' + com + " = " + hasil);
	tanya = confirm('lagi?');


};
alert('Hasil lengkap nya bisa dihat di console.log nya')
alert('Terimakasih telah bermain.');
