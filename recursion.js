// contoh simpel function recursive

function hitung(nomor) {
  //display nomor
  console.log(nomor);

  // decrese the nomor
  const nomorBaru = nomor - 1;

  // case
  if (nomorBaru > 0) {
    countdown(nomorBaru)
  }
}

hitung(3)
