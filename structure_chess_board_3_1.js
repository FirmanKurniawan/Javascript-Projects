for (var row = 0; row < 8; row++) {
    var str = '';
    for (var col = 0; col < 8; col++) {
	if ((row % 2) == (col % 2)) {
	    str += '#';
	} else {
	    str += '_';
	}
    }
    console.log(str);
}
