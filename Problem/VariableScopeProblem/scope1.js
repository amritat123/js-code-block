console.log(x);
var x = 5;

function show() {
  console.log(x);
  var x = 10;
}

show();
console.log(x);

// output:- undefined
