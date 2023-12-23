// let myDate = new Date()
// // Date methods........
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 11, 23)  //--> Date input method
// let myCreatedDate = new Date(2023, 11, 23, 15, 3)  //--> Date input method
// let myCreatedDate = new Date("2023-12-23")  //--> Date input method
// let myCreatedDate = new Date("12-23-2023)  //--> Date input method
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp);
// console.log(Math.round(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCDate());

newDate.toLocaleString('default', {
    weekday: "long",

})
console.log(newDate());