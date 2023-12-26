
// function sayMyName(){
//     console.log("U")
//     console.log("M")
//     console.log("A")
//     console.log("I")
//     console.log("R")
// }
// sayMyName()  // we can print function by this method



// function addTwoNmbers(number1, number2){
//     console.log(number1 + number2);
// }


// function addTwoNmbers(number1, number2){
    // let result = number1 + number2

    // console.log("Umair");  //we can execute this statement before the return argument,
                           //we cant execute log function after the return argument
    // return result

    // return number1 + number2  // we can directly execute the return argument in function
// }
// let result = addTwoNmbers(2,5)
// console.log("result: ",result);




function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username!");
        return 
    }
    else {
        return `${username} just logged in`
    } 
}
console.log(loginUserMessage())
