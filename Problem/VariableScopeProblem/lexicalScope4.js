let p = 1;

function outer() {
  let p = 2;
  function inner() {
    console.log(p);
  }
  inner();
}

outer();
console.log(p);

// output :- 2 , 1 ====== bcz of lexical scope

