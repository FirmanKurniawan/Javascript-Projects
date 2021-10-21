function pyramid(rows){
  for (var i = 0; i < rows; i++){
  
    //resets saved row design
    var spaces = '';
    var asterisks = '';
    
    //builds spaces before asterisk
    for (var j = 1; j < (rows - i); j++){
      spaces = spaces + ' ';
    }
    
    //builds asterisks
    for (var x = 1; x <= (2*i + 1); x++){
      asterisks = asterisks + '#';
    }
    console.log(spaces + asterisks)
  }
}

pyramid(5)
