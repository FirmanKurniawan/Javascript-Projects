const numberWithCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const numberFormatter = (num, fixed) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(fixed ? fixed : 0) + "k";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(fixed ? fixed : 0) + "m";
  } else if (num < 1000) {
    return num;
  }
};
