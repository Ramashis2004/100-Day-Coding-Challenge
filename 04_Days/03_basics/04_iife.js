//IIFE (mmediately Invoked Function Expression)
//It means a function that runs immediately after it's defined.

(function chai(){
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
})('hitesh')