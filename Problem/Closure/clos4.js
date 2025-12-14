function outer() {
  var count = 0;
  return {
    inc() { count++; },
    dec() { count--; }
  };
}

// output- 
