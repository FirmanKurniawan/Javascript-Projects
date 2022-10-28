var barang = ['pensil', 'buku', 'penggaris'];
 
// menampilkan data
function ShowData() {
    var listBarang=document.getElementById('list-barang');
 
    listBarang.innerHTML = '';
 
    for (var i=0; i<barang.length; i++) {
        var linkHapus='<a href="#" onclick="DelData('+i+')">Hapus</a>';
        listBarang.innerHTML+='<li>'+barang[i]+' '+linkHapus+'</li>';
    };  
}
 
// menambahkan data
function AddData() {
    var input=document.getElementById('nama');
    //memasukan data ke array
    barang.push(input.value);
    ShowData();
}
 
// menghapus data
function DelData(id) {
    // menghapus elemen dari indeks array
    barang.splice(id,1);
    ShowData();
}
 
//menjalankan fungsi tampil data
ShowData();