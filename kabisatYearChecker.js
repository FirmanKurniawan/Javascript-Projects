function kabisatYearChecker(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(year + " adalah tahun kabisat");
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log(year + " adalah tahun kabisat");
  } else {
    console.log(year + " bukan tahun kabisat");
  }
}

let year = 2004;
kabisatYearChecker(year);
kabisatYearChecker(2001);
kabisatYearChecker(2021);

