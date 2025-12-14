const user = {
  name: "Amrita",
  greet() {
    const inner = () => {
      console.log(this.name) // arrow function this will take value from global (outer func)
    }
    inner()
  }
};

user.greet();

// output  = "Amrita"