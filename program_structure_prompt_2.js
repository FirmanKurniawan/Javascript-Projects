while (true) {
	var number = Number(prompt("Enter a number:"));
	if (isNaN(number)) {
		alert("It's not a number.");
	} else if (number < 10){
		alert("It's too small.");
	} else {
		break;
	}
}
