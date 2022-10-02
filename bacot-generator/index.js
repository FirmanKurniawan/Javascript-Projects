let teks = document.getElementById("paperInputs1");
let teks2 = document.getElementById("paperInputs2");
let tombol = document.getElementById("ubah");
let tampil = document.getElementById("tampil");
let tombol2 = document.getElementById("copy");

tombol.addEventListener("click", function () {
  teks2.value = teks.value.replace(/[aueo]/gi, "i");
});

tombol2.addEventListener("click", function () {
  alert("Teks Berhasil di Copy");
  teks2.select();
  teks2.execCommand("copy");
});
