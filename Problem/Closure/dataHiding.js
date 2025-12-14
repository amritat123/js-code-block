function bankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}
bankAccount()

// output - balance can't access.
