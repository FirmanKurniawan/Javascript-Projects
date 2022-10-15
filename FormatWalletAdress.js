const formatWalletAddress = (address, start, end) => {
  if (!address) {
    return "";
  }
  return address.slice(0, start) + "...." + address.slice(address.length - end);
};
