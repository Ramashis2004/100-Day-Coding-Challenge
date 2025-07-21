const Useremail=[]

if(Useremail){
    console.log("got user email")
} else{
    console.log("don't have user email")
}       

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//Nullish Colescing Operatot (??): null undefined

let val1;   

// val1=5??10
// val1=null??10
val1=0??10
val1=undefined??15
val1=null??undefined
console.log(val1);

//Ternary Oprator




