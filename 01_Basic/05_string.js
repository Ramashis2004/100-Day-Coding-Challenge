const name= "Code with Harry"; // name is a primitive data type (string) and is stored in stack memory.
const repocount=30




console.log("Hello, my name is " + name + " and I have " + repocount + " repositories."); // Concatenation of strings using the + operator.

console.log(`My name is ${name} and I have ${repocount} repositories.`); // Template literals allow for multi-line strings and string interpolation.
                                                                         //The benefit of string interpolation is direct modify 


console.log(name[0]); // Accessing the first character of the string using bracket notation.

console.log(name.charAt(2));   //just search in chat cpt What is the some method like this
console.log(name.length); // Getting the length of the string using the length property.
console.log(name.toUpperCase()); // Converting the string to uppercase using the toUpperCase() method.
console.log(name.toLowerCase()); // Converting the string to lowercase using the toLowerCase() method.
console.log(name.indexOf("H")); // Finding the index of the first occurrence of "H" in the string using indexOf() method.
console.log(name.lastIndexOf("H")); // Finding the index of the last occurrence of "H" in the string using lastIndexOf() method.
console.log(name.slice(0, 4)); // Extracting a substring from the string using the slice() method.
console.log(name.replace("Harry", "Hitesh")); // Replacing "Harry" with "Hitesh" in the string using the replace() method.
console.log(name.includes("Code")); // Checking if the string includes the substring "Code" using the includes() method.


// trim used to remove whitespace from both ends of a string.
console.log(name.trim()); // Removing whitespace from both ends of the string using the trim() method.
console.log(name.startsWith("Code")); // Checking if the string starts with "Code" using the startsWith() method.
console.log(name.endsWith("Harry")); // Checking if the string ends with "Harry" using the endsWith() method.

// split used to split a string into an array of substrings based on a specified separator.
console.log(name.split(" ")); // Splitting the string into an array of substrings using the split() method with a space as the separator.
console.log(name.split("")); // Splitting the string into an array of characters using the split() method with an empty string as the separator.
