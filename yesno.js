var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    var jawab = confirm("Apakah anda mau mengulang?")
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");
