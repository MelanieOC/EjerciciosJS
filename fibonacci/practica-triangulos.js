function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

function quiz3(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    var e = espacios (n - (i+1));
    for (var j = i; j >= 1; j--) {
      s += j;
    }
    console.log(e + s);
  }
}


function quiz1(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    console.log(s);
  }
  var e = espacios(n);
  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = n - i; j >= 1; j--) {
        s += j;
      }
      console.log(e + s);
  }  
}
function quiz2(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= n-i; j++) {
      s += j;
    }
    console.log(s);
  }
  
}

quiz3(8);

//quiz1(4);
