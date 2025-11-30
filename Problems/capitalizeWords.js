// Capitalize First Letter of Each Word

const CapitalizeLatter = (letters) => {
    const sentence = letters.split("").map(word => word[0].toUpperCase()+ word.splice(1));
    return sentence;
}
(console.log(CapitalizeLatter("My Name is John Doe")));