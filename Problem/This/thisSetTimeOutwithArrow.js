const user = {
  name: "Amrita",
  greet: function () {
    setTimeout(() => { // arrow function
      console.log(this.name);
    }, 1000);
  }
};

user.greet();


// output = undefined
