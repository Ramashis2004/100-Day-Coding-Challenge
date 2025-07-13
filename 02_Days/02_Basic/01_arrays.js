//array

const myArray = [1, 2, 3, 4, 5]; // myArray is an array of numbers stored in stack memory.


let myHeros=["Iron Man","Spider Man","Thor","Hulk","Captain America"]; // myHeros is an array of strings stored in stack memory.


// console.log(myArray); // Output the entire array to the console.
// console.log(myHeros[0]); // Output the entire array of heroes to the console.


// const arr = [1, "two", true];
// console.log(arr[0]);          // 1
// console.log(arr[arr.length -1]); // true



//Araay methods
// myArray.push(6); // Adds 6 to the end of myArray.
// myArray.pop(); // Removes the last element from myArray.
// myArray.unshift(9); // Adds 0 to the beginning of myArray.
console.log(myArray); // Output the modified array to the console.


console.log(myArray.includes(3)); // Checks if 3 is in myArray, returns true or false.
console.log(myArray.includes(9)); // Returns the index of 4 in myArray, or -1 if not found.





//Slicing and Splicing
console.log("A",myArray);
console.log("B",myArray.slice(1, 3)); // Returns a new array with elements from index 1 to 2 (not including index 3).
console.log("C",myArray.slice(1)); // Returns a new array with elements from
// index 1 to the end of the array.
console.log("D",myArray.slice(-2)); // Returns a new array with the last two elements of myArray.
console.log("E",myArray.slice(1, -1)); // Returns a new array with elements from index 1 to the second last element.


// Splicing modifies the original array and returns the removed elements.
console.log("F",myArray.splice(1, 2)); // Removes 2 elements starting from index 1 and returns them.
console.log("G",myArray); // Output the modified array after splicing.
myArray.splice(1, 0, 10); // Inserts 10 at index 1 without removing any elements.
console.log("H",myArray); // Output the modified array after inserting 10.



//Searching in an array methods in chat cpt 






