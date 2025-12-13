let a = 5;

function one() { // lexical scope

  function two() {
    console.log(a); // local scope
  }

  let a = 10;
  two();
}

one();


// output - 10
