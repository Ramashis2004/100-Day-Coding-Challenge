// #primitive data types
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol (ES6)
// - BigInt (ES11)





// #non-primitive data types(reference data types)
// - Object
// - Array
// - Function



//++++++++++++++++++++++++++=Memoery allocation++++++++++++++++++++++++++++++


// Stack memory
// - Primitive data types are stored in stack memory.
// - Stack memory is faster than heap memory.
// - Stack memory is limited in size.

// Heap memory
// - Non-primitive data types are stored in heap memory.
// - Heap memory is slower than stack memory.
// - Heap memory is larger in size.


let myyoutubeChannel = "Code with Harry";     // myyoutubeChannel is a primitive data type (string) and is stored in stack memory.
let myyoutubeChannel2 = myyoutubeChannel;     // myyoutubeChannel2 is a copy, so it is also a primitive data type (string) and is stored in stack memory.
let anothetrYoutubeChannel = myyoutubeChannel;

console.log(myyoutubeChannel, anothetrYoutubeChannel);



let user={                        // user is a non-primitive data type (object) and is stored in heap memory.
    name: "Code with Harry",
    age: 30
}

let user2={
    name: "hitesh" ,
    age: 25
}


console.log(user.name, user2.name);

