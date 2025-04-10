function reverseString(string) {
    if (string.length === 1) {
        return string;
    }
    return string.charAt(string.length - 1) + reverseString(string.slice(0, string.length - 1));
}


console.log(reverseString("Goodbye"));

console.log(reverseString("Radar"));

console.log(reverseString("Elbow"));

console.log(reverseString("z"));

let stringTest = "Hello"

console.log(stringTest.charAt(stringTest.length - 1) + stringTest.slice(0, stringTest.length - 1));
