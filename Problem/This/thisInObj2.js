const obj = {
  value: 10,
  getValue: () => { // arrow function does not have own this
    console.log(this.value);
  }
};

obj.getValue();


// output  = undefined