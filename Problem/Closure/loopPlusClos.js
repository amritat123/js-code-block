function test() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

test();


// output- 4 4 4
