function ArraySeq(_array){
  var array = _array.slice();
  var start = 0;
  var end   = array.length - 1;

  this.isEmpty = function(){
    return end < start;
  }

  this.get = function(idx){
    if(idx >= start && idx <= end)
      return array[idx];
    else
      return "Index invalid!";
  }

  this.indexOfTail = function(){
    return end;
  }
}

function RangeSeq(_st, _ed){
  var base = _st;
  var start = 0;
  var end = _ed - _st;

  this.isEmpty = function(){
    return end < start;
  }

  this.get = function(idx){
    if(idx >= start && idx <= end)
      return idx + base;
    else
      return "Index invalid!";
  }

  this.indexOfTail = function(){
    return end;
  }
}

function logFive(seq){
  if(!seq.isEmpty()){
    var cnt = 0;
    var idx = 0;
    while(true){
      console.log(seq.get(idx));
      cnt++;
      if(cnt == 5 || idx == seq.indexOfTail()) break;
      idx++;
    }
  }
}

// test
logFive(new ArraySeq([1, 2]));
console.log("---------------");
logFive(new RangeSeq(100, 1000));
