function test() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

test();



// output- 1 2 3
