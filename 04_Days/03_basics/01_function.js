//Function

function sayMyName(name) {
  console.log("R");
  console.log("A");
    console.log("H");
    console.log("U");

  
  
}
// sayMyName()


// function add(a, b) {           //It is parameter    
//   console.log(`The sum of ${a} and ${b} is: ${a + b}`);
// }
 
// add(5, 10); // 15    //It is argument 

function add(a,b){
    let result=a+b
    return result
}

const result= add (3,5)
// console.log("Result: ",result)



function loginUserMessage(username){


  // if(username=== undefined){
  if(!username){
    console.log("Please Enter u user name");
    return
    
  }
  return `${username  }just logged in`
}
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculatinCardPrice(val1,val2,  ...num1){            //... is call ed rest oprator
 // console.log(val1);
  
   return num1
}
//console.log(calculatinCardPrice(200,400,500,200));
//console.log("val1");


// const user={
//   username: "ram",
//   age:434


// }

// function handleObject(anyobject){
//   console.log(`username is ${anyobject.username} and the age is ${anyobject.age}`);
  
// }
// handleObject(user)


const user = {   //why you use retuen clear explanantion
  username: "ram",
  age: 434
};

function handleObject(anyobject) {
  return `username is ${anyobject.username} and the age is ${anyobject.age}`;
}

// ✅ Reuse the returned value
const message = handleObject(user);

// ✅ Use it in multiple places
console.log("Log 1:", message);
console.log("Log 2:", message.toUpperCase());
console.log("Log 3:", message.length);



