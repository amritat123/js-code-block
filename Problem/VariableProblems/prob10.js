// let myname = "Amrita"; // Global Scope
function outer() {
  var myname = "Amrita"; // functional scope
  function inner() { // Block scope
    console.log(myname);
  }

  inner();
}

outer();
console.log(myname);


// output = myname is not defined
