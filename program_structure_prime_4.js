while (true) {
var number = Number(prompt('Enter a positive number:'));
	if (!isNaN(number) && number > 0) break;
}

if (number < 2) {
	alert("It's not a prime number.");
}
else if(number == 2) {
	alert("It's a prime number.");
}
else {
	var check = true;
	for(var i = 2; i < number; i++) {
		if (number % i == 0) {
			check = false;
			break;
		}
	}
	if(check) alert("It's a prime number.");
	else alert("It's not a prime number.");
}
