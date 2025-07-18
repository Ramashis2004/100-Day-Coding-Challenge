//Arrow Function


const user={
    username:"ramashis",
    age:21,

    welcomemessage:function(){
        console.log(`${this.age},welcome to website`);       //this basically use the current context 
        // console.log(this);
    }
}
// user.welcomemessage()
// user.age="XXX"
// user.welcomemessage()


// console.log(this);   //Here the out pot is {} but in broswer it is window


// function chai(){
// console.log(this);

// }
// chai()



// const chai = function(){
//     let username="XXXXXXXX"
//     console.log(this.username);
// }
// chai()
// const chai =() => {
//     let username="XXXXXXXX"
//     console.log(this);
// }
// chai()


// const addTwo= (add1,add2) =>{       

//     return add1 + add2                    //Explicity retun,It mean i am using the retun key word

// }
// console.log(addTwo(3,4));


// const addTwo= (add1, add2) =>(add1 + add2)   //Implicit return,It mean i am not using the retun key word

// console.log(addTwo(3, 4));


const addTwo = (num1,num2) =>({usernam:"ram"})

console.log(addTwo(3, 4));

