// pengulangan
var tanya = true

alert('Selamat bermain suit jawa')
while( tanya ){
    // pilihan player

    var p = prompt('pilih : gajah,semut,orang');
    // pilihan computer
    // mmbangkitkan bilangan random
    var comp = Math.random();
        if( comp < 0.34){
            comp = 'orang';
        }else if ( comp > 0.34 && comp <= 0.67){
            comp = 'gajah';
        }else{
            comp = 'semut'
        }
        console.log(comp)
    // rulers
    var hasil = ''

    if( p == comp){
        hasil = 'SERI!'
    }else if ( p == 'orang'){
        if( comp == 'semut' ){
            hasil = 'MENANG!'
        }else{
            hasil = 'KALAH!'
        }
    }else if ( p == 'gajah' ){
        if ( comp == 'semut' ){
            hasil = 'KALAH!' 
        }else{
            hasil = 'MENANG!'
        }
    }else if ( p == 'semut'){
        if ( comp == 'orang'){
            hasil = 'KALAH!'
        }else{
            hasil = 'MENANG!'
        }
    }else{
        hasil = 'yang kamu masukan bukan pilihan'
    }

// hasil

    alert('Kamu memilih ' + p +' computer memilih ' + comp + ' \n Hasilnya ' + hasil);

    tanya = confirm('apakah kamu mau bermain lagi?')
}
alert('Terima Kasih sudah bermain.')
