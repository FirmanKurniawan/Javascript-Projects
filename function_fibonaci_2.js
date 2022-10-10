// recursion
function f1(number){
	if(number == 0 || number == 1) return 1;
	return f1(number - 1) + f1(number - 2);
}

// loop
function f2(number){
	if(number == 0 || number == 1) return 1;

	var a2 = 1, a1 = 1, a;
	for(i = 2; i <= number; i++){
 		a = a1 + a2;
 		a2 = a1;
 		a1 = a;
	}

	return a;
}
