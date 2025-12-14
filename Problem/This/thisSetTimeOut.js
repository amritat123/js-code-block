const user = {
  name: "Amrita",
  greet: function () {
    setTimeout(function () { // this is normal function
      console.log(this.name);
    }, 1000);
  }
};

user.greet();

// output = undefined
