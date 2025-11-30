
function foo() {
  console.log("inside of a value--->", a);
  a = 30;
}
foo();
var a = 20;
console.log("Outside of a value", a);

// output = undefind , 20