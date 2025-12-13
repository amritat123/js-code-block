function outer() {
  let name = "Amrita";

  function inner() {
    console.log(name);
  }

  return inner;
}

const fn = outer();  // Amrita
fn();

// output- 
