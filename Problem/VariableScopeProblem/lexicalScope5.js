let a = 10;

function outer() {
  let a = 20;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();



// output :- 20

