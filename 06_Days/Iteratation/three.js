// for of

const greeting="Hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
//   console.log(fruit);
}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
  console.log(map);
  
for (const [key, value] of map) {
  console.log(key, ':-',value)
  
}     

const myObject={
  'game1':'NFS',
  'game2':'Spiderman'
}
for(const [key,value] of myObject){
  console.log(key, ':-', value  )
}

