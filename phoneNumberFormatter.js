const phoneNumberFormatter = (numbs) => {
  if (typeof numbs !== "string") {
    return "it is not string";
  }

  let result = "(+xx) xxx-xxxx-xxxx";

  for (const element of numbs) {
    result = result.replace("x", element);
  }
  return result;
};

const test = phoneNumberFormatter(6285788431592);

console.log(test);
