// <, >, <=, >=, ===, !=, !==, ==

// let temp = 23
// let isUserLoggedIn = true
// if (temp < 23){
//     console.log("Ture");  
// }
// else{
// console.log(`false ${temp}`);
// }


// let score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);


// let balance = 1000
// if (balance > 500) console.log("test");  //we can also execute if statement like this 

// if (balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }



let userLoggedIn = true
let debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user Logged in!");
}