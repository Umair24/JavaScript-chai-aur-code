
// function sayMyName(){
//     console.log("U")
//     console.log("M")
//     console.log("A")
//     console.log("I")
//     console.log("R")
// }
// // sayMyName()  // we can print function by this method



// // function addTwoNmbers(number1, number2){
// //     console.log(number1 + number2);
// // }


// function addTwoNmbers(number1, number2){
//     let result = number1 + number2

//     console.log("Umair");  //we can execute this statement before the return argument,
//                         //    we cant execute log function after the return argument
//     return result

//     return number1 + number2  // we can directly execute the return argument in function
// }
// let result = addTwoNmbers(2,5)
// console.log("result: ",result);




// function loginUserMessage(username){
//     if(username == undefined){
//         console.log("Please enter a username!");
//         return 
//     }
//     else {
//         return `${username} just logged in`
//     } 
// }
// console.log(loginUserMessage())



// function calculateCartPrice(val1, val2,  ...num1){  //The "..." are called as rest() and spread() operator but here it is called rest() operator
//     return num1
// }
// console.log(calculateCartPrice(256,565,255))




// --------------Functions with Object---------------
// let user = {
//     username: "Umair",
//     price: 200
// }

// function handleObject(anyObject){   // we can also take anyobject parameter in function so that function will automatically detect object present in the code
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// console.log(handleObject(user));

// function handleObject(user){   //we can take given object as parameter in function
//     console.log(`username is ${user.username} and price is ${user.price}`);
// }
// // console.log(handleObject(user));




// ------------Functions with Array-----------
let myNewArray = [200, 500, 800, 900]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 800, 900]));