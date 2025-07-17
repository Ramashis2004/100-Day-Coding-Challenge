// const tinderUser=new Object();
const tinderUser ={}

// console.log( tinderUser); //tinderUser { name: 'ram', age: 18, email: '


const regularuser = {
    email: "regularuser@example.com",

    fullname: {
        first: "Regular",
        last: "User"

    },
}
// console.log(regularuser); // { email: 'regularuser@example.com', fullname: { first: 'Regular', last: 'User' } }
// console.log(regularuser.email); // regularuser@example.com
// console.log(regularuser.fullname.first); // Regular
// console.log(regularuser.fullname.last); // User


const obj1= {1: "one", 2: "two", 3: "three"};
const obj2= {4: "four", 5: "five", 6: "six"};

// const obj3=console.log({...obj1, ...obj2});   //Spred oprator to merge two objects
// console.log();
const obj3 = Object.assign({}, obj1, obj2); // Merging two objects
// console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }



const user=[
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"     
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
    }
]

user[1].email
console.log(regularuser); // {}

console.log(Object.keys(regularuser));
console.log(Object.values(regularuser));
console.log(Object.entries(regularuser)); // Returns an array of key-value pairs


console.log(regularuser.hasOwnProperty("email")); // true


//It more about object



