while(true) {
    var number = Number(prompt("Enter a positive number:"));
    if(!isNaN(number) && number > 0) break;
}

for (var row = 0; row < number; row++) {
    var str = '';
    for (var col = 0; col < number; col++) {
	if ((row % 2) == (col % 2)) {
            str += '#';
	} else {
	    str += '_';
	}
    }
    console.log(str);
}
