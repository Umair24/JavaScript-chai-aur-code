// Immediately Invoked Function Expressions (IIFE)

// (function chai(){
//     // This is a named IIFE
//     console.log("DB Connected");
// })();


// ( (name) => {
//     // this function is not a named IIFE
//     console.log(`DB Connected Two ${name}`);
// }) ("Umair")





// --------------JavaScript Execution Context---------------

// 1)Global Execution Context
// 2)Functional/function Execution Context
// 3)Eval Execution Context

// Steps of executing a js code
// 1) Memory creation phase
// 2) Execution Phase


// For Example
let val1 = 20
let val2 = 55
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(555,232)

// code execution steps 
// 1) global execution
// 2) memory phase
    // val1 --> undefined
    // val2 --> undefined
    // addNum --> definition
    // result1 --> undefined
    // result2 --> undefined

// 3) execution phase
    // val1 --> 20
    // val2 --> 55
    // addNum -->  new variable  //after the execution this will deleted automatically
    //             environment
    //                  +
    //             execution thread
    // again memory phase and code execution phase execute for result1