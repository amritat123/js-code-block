function test() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn1 = test();
fn1();
fn1();

const fn2 = test();
fn2();


// output - 1 2 1
