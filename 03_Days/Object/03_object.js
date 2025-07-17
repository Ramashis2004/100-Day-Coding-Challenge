//Destructuring

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructuring
const { name, age, city } = person;
// console.log(name); // John
// console.log(age); // 30
// console.log(city); // New York  
console.log(person);
             

//Convert array to object
const personArray = ['John', 30, 'New York'];
const personObject = {
  name: personArray[0],
  age: personArray[1],
  city: personArray[2]
};
console.log(personObject);


const arr = ['a', 'b', 'c'];
const obj = Object.assign({}, arr);
console.log(obj); 
// Output: {0: "a", 1: "b", 2: "c"}
