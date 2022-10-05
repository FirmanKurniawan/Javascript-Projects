const fizzbuzz = (num: number) => {
  const fizz: string = "Fizz";
  const buzz: string = "Buzz";

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log(fizz + buzz);
    } else if (i % 3 === 0) {
      console.log(fizz);
    } else if (i % 5 === 0) {
      console.log(buzz);
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(100);
