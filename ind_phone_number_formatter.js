///[formatToIdn] formats given phoneNumber to IDN code. return +62xxxxxxxxxx
function formatToIdn(phoneNumber) {
    if (phoneNumber == null || phoneNumber == "") {
        return "Phone number is empty";
    }
    if (phoneNumber.length < 10) {
        return "Phone number minimum 10 characters";
    }
    if (phoneNumber[0] == "0" && phoneNumber[1] == "8") {
        return phoneNumber.replace("0", "+62");
    }
    if (phoneNumber.substring(0, 2) == "62") {
        return `+${phoneNumber}`;
    }
    return phoneNumber;
}

export default formatToIdn;