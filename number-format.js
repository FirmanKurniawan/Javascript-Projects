const currencyFormat = (
  value = 0,
  currency = "IDR",
  localeString = "id-ID"
) => {
  const numberedValue = Number(value);

  return numberedValue
    .toLocaleString(localeString, {
      style: "currency",
      currency,
    })
    .slice(0, -3);
};

const thousandsFormat = (value) => {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

console.log("format currency => ", currencyFormat(10000));
console.log("number in thousand format => ", thousandsFormat(10000));
