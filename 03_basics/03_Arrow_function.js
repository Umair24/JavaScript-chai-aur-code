// let user = {
//     username: "Umair",
//     price: 555,
//     welcomemsg: function(){
//         console.log(`${this.username} , welcome to our website`);
//         console.log(this);
//     }
// }
//  user.welcomemsg()
//  user.username = "Anas"
//  user.welcomemsg()
// console.log(this);



// ----------methods to declare a function---------
// function one(){
//     let username = "Umair"
//     console.log(this.username);
// }
// one()


// let two = function(){
//     let username = "Umair"
//     console.log(this.username);
// }
// two()


// let three = () => {
//     let username = "Umair"
//     // console.log(this);
//     console.log(this.username);
// }
// three()



// ------------- Various types of declaring Arraow Functions -------------
// let addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5))


// let addTwo = (num1, num2) => num1 + num2  // This arraow function is called as "implicite function"
// console.log(addTwo(5, 4));
                    // OR
let addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(5, 4));