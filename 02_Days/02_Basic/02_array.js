const marvel_heros=["Iron Man","Spider Man","Thor","Hulk","Captain America"]
const dc_heros=["Batman","Superman","Wonder Woman","Flash","Aquaman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros); // Output the combined array of Marvel and DC heroes to the console.



// marvel_heros.concat(dc_heros); // Combines the two arrays into one.
//  console.log(marvel_heros); // Output the combined array to the console.



// const all_new_heros = [...marvel_heros, ...dc_heros]; // Combines the two arrays using spread operator.
// console.log(all_new_heros); // Output the combined array to the console.


// const another_array = [1, 2, 3, [4,5,6], 7, 8]; // another_array is a nested array.
// console.log(another_array[3][1]); // Accesses the second element of the nested

// const real_another_array = [1, 2, 3, [4,5,6], 7, 8]; // real_another_array is a nested array.
// console.log(real_another_array.flat()); // Flattens the nested array into a single array.
// console.log(real_another_array.flat(2)); // Flattens the nested array to a depth of 2.
// console.log(real_another_array.flatMap(x => x * 2)); // Maps each element



console.log(Array.isArray("marvel_heros")); // Checks if marvel_heros is an array, returns true or false.
console.log(Array.from("marvel_heros")); // Checks if marvel_heros is an array, returns true or false.
console.log(Array.isArray(dc_heros)); // Checks if dc_heros is an     


console.log(Array.from({name:"Ram"}));
