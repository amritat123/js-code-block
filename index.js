

debugger
console.log(a);
var a = 5;

function show() {
    debugger
    console.log(a);
    var x = 10;
    function b() {
        debugger
        console.log(a)
        console.log(x)
        let c = 10;
        console.log(c + a + x)
    }

    function d() {
        debugger
        console.log(c + a + x)
    }
    b()
    d()
}

show();
console.log(a);

// undefined
// 5
// 5
// ref error



