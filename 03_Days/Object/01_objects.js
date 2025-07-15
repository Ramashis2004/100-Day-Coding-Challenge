//Singleton

//Object literal



const mySym=Symbol("key");
const Jsuser={
    name:"ram",
    [mySym]: "mySym", //symbol as a key, If the [] are bnot there then it is normal string,If it is under[] then it is symbol
    age: 18,
    email: "das@email.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday", "wednesday"],
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser[mySym]); //undefined, as mySym is not a key in Jsuser


// Jsuser.email = "ramashis@gmail.com  "; //update email
// Object.freeze(Jsuser); //freeze the object, no more changes can be made to the object
// Jsuser.email = "newemail@gmail.com"; //error: cannot assign to read only property 'email' of object '#<Object>'
// console.log(Jsuser); //still prints the old email as the object is frozen


Jsuser.greeting = function () {
    console.log("Hello Js User");
}

Jsuser.greetingTwo=function(){
    console.log(`Hello Js User Two, ${this.name}`);
}
 console.log(Jsuser.greeting()); //Hello Js User
    console.log(Jsuser.greetingTwo()); //Hello Js User Two, ram


