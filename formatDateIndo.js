const formatDateIndo = (d, { withDay = true }) => {
  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDay()
  const date = d.getDate()

  const days = {
    0: "Minggu",
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat",
    6: "Sabtu",
  }

  const months = {
    0: "Januari",
    1: "Februari",
    2: "Maret",
    3: "April",
    4: "Mei",
    5: "Juni",
    6: "Juli",
    7: "Agustus",
    8: "September",
    9: "Oktober",
    10: "November",
    11: "Desember",
  }

  const formattedDate = `${withDay ? `${days[day]}, ` : ""}${date} ${months[month]}, ${year}`
  return formattedDate
}

const date = new Date()
console.log(formatDateIndo(date, { withDay: true }))
