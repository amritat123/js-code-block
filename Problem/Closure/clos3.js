function outer() {
  let x = 10;

  return function inner(y) {
    console.log(x + y);
  };
}

const add = outer();
add(5);
add(20);

// output- 10 , 30
