let x = 5;
let fill = "";
//diamond pattern
function starDiamond(){
  for (let i = 1; i <= x; i++) {
    for (let j = x; j > i; j--) {
      fill += " ";
    }
  
    for (let k = 0; k < i * 2 - 1; k++) {
      fill += "*";
    }
    fill += "\n";
  }

  for (let i = 1; i <= x - 1; i++) {
    for (let j = 0; j < i; j++) {
      fill += " ";
    }
  
    for (let k = (x - i) * 2 - 1; k > 0; k--) {
      fill += "*";
    }
    fill += "\n";
  }

  return fill;
}

console.log(starDiamond());
