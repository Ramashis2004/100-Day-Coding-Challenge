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
console.log(loginUserMessage());


