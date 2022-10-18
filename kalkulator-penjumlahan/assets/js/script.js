const operand1 = document.querySelector('#operand1');
const operand2 = document.querySelector('#operand2');
const tombolTambah = document.querySelector('#tombol-tambah');
const hasil = document.querySelector('#hasil');
const error = document.querySelector('#error');

// utility
const parseInput = (...input) => {
  return input.map((str) => parseInt(str));
};

const cekInputValid = (...angka) => {
  return angka.every((num) => typeof num === 'number' && !isNaN(num));
};

// service
const pesanErrorPenjumlahan = (input, angka) => {
  const hasil = input.reduce((pesan, nilai, index) => {
    if (cekInputValid(angka[index])) {
      return pesan + '';
    } else {
      return pesan + `${nilai} itu bukan angka! `;
    }
  }, 'Silahkan masukkan angka yang benar: ');

  error.classList.remove('d-none');
  error.innerText = hasil;
};

const sembunyikanError = () => error.classList.add('d-none');
function clearOperand(target) {
  if (target.value == operand1.value || operand2.value) {
    target.value = '';
  }
}
sembunyikanError();

tombolTambah.addEventListener('click', function () {
  sembunyikanError();
  clearOperand(operand1.value);
  clearOperand(operand2.value);
  const input = [operand1.value, operand2.value];
  const angka = parseInput(...input);
  if (cekInputValid(...angka)) {
    const [angka1, angka2] = angka;
    hasil.innerText = angka1 + angka2;
  } else {
    hasil.innerHTML = '';
    pesanErrorPenjumlahan(input, angka);
  }
});
