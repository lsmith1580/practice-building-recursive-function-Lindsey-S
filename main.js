function reverseString(string) {
    if (string.length === 1) { //Base case, end recursion if the string length is equal to 1
        return string;
    }
    return string.charAt(string.length - 1) + reverseString(string.slice(0, string.length - 1));  
}   //Adding the last character of the string to the slice of the string that includes the first character to the character before the last character.
    //Passes the slice of the string through reverseString(), each iteration is getting smaller and is added to the call stack. Once it reaches the base case,
    //it stops the recursion and adds the letters back to the string based on when they were added to the call stack, returning the string but reversed.


console.log(reverseString("Goodbye"));

console.log(reverseString("Radar"));

console.log(reverseString("Elbow"));

console.log(reverseString("z"));

let stringTest = "Hello"

console.log(stringTest.charAt(stringTest.length - 1) + stringTest.slice(0, stringTest.length - 1)); //Used these console logs to test what my string methods were actually doing. 
