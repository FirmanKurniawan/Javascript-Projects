console.log(FUNCIndoDate('01-01-2022'));

const FUNCIndoDate = date => {
  var SplitTanggal = date.split('-');
  var Hari = SplitTanggal[0];
  var Bulan = SplitTanggal[1];
  var Tahun = SplitTanggal[2];

  var ArrayBulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  if (Bulan < 10) {
    Bulan = Bulan.replace('0', '');
  }

  return Hari + ' ' + ArrayBulan[Bulan - 1] + ' ' + Tahun;
};
