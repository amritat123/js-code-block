let name = "Global";

function level1() {
  let name = "Level1";

  function level2() {
    let name = "Level2";

    function level3() {
      console.log(name);
    }

    level3();
  }

  level2();
}

level1();

// output - "Level2"
