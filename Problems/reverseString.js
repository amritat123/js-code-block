// Reverse a String

const revierString = (str) => {
    const reversed = str.split("").reverse().join('');
    console.log("reversed-",reversed);
}
revierString('hello'); 