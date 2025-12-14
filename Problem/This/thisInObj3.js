const obj = {
  value: 5,
  show() {
    function inner() {  // normal function
      console.log(this.value);
    }
    inner();
  }
};

obj.show();


// output = undefined