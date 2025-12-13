function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter(); // 1
inc();
inc();
inc();


// output- 1, 2, 3
