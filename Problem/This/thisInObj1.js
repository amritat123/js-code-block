const obj = {
  value: 10,
  getValue() {
    console.log(this.value);
  }
};

obj.getValue();

// output  = 10