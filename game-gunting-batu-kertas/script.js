alert('Bagian atas merupakan komputer, anda bisa memilih bagian anda di bawah komputer');
// fungsi memilih pilihan random komputer
function getPilihanKomputer() {
  const komp = Math.random();
  if (komp < 0.35) return 'gunting';
  if (komp >= 0.35 && komp < 0.65) return 'batu';
  return 'kertas';
}

// fungsi mendapatkan hasil
function getHasil(komp, player) {
  if (player == komp) return 'SERI!';
  if (player == 'gunting') return komp == 'batu' ? 'KALAH' : 'MENANG';
  if (player == 'batu') return komp == 'gunting' ? 'MENANG' : 'KALAH';
  if (player == 'kertas') return komp == 'batu' ? 'MENANG' : 'KALAH';
}

// fungsi mengacak gambar komputer, agar terlihat berpikir
function acakGambar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gunting', 'batu', 'kertas'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    acakGambar();

    setTimeout(function () {
      const imgKomputer = document.querySelector('.img-komputer');
      imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});
