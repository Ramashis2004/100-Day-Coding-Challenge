//Dates

// const date = new Date();
// console.log(date); // Current date and time
// console.log(date.toString()); // String representation of the current date and time
// console.log(date.toDateString()); // Date in a human-readable format
// console.log(date.toTimeString()); // Time in a human-readable format
// console.log((date.toLocaleDateString())); // Date in locale-specific format
// console.log(date.toLocaleTimeString()); // Time in locale-specific format
// console.log(date.getFullYear()); // Current year



let myTimestamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
console.log(myTimestamp); // Output the current timestamp


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
})); // Output the date in a human-readable format with weekday, month, day, year, hour, and minute