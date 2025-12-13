
let x = "Global";

function inner() {
  console.log(x);
}  

function outer() {
  let x = "Outer";
  inner();
}

outer();


// output :- // Global

