function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  var result;
  while(true){
    try{
      result = primitiveMultiply(a, b);
      break;
    }catch(error){
      if(error instanceof MultiplicatorUnitFailure){
        console.log("Error: MultiplicatorUnitFailure");
      }else{
        throw error;
      }
    }  
  }
  return result;
}

console.log(reliableMultiply(8, 8));
// => 64
