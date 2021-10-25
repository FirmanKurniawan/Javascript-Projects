  function FormatRupiah (number) {
    const data = number.toLocaleString('id-ID')
    return `Rp ${data}`
  }

  const result = FormatRupiah(200000000.69)
  console.log(result)
  // Result Rp 200.000.000,69
