

// if narcissistic number == true
// 153 == 1**3 + 5**3 + 3**3 = 153
function narcissistic(value) {
    var result = 0
    const data = value.toString()
    const dataLength = data.length
    if (data.length == 1) return true
    for (let index = 0; index < data.length; index++) {
        a = parseInt(data.charAt(index))
        b = a ** dataLength
        result += b
    }
    return result == value ? true : false
}
narcissistic(153)
